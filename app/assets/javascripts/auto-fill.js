/* global $, sessionStorage  */

$(document).ready(function () {
    var currentData = {}

    var controls = window.hmpoAutoFillControls
    var fillData = window.hmpoAutoFillData
    var restrictions = window.hmpoAutoFillRestrictions

    function createControls () {
        var $container = $('<span>')
            .attr('class', 'hmpoAutoFill')
        $('<button>')
            .attr('class', 'hmpoAutoFill-fill')
            .text('Fill')
            .on('click', fill)
            .appendTo($container)
        $('<button>')
            .attr('class', 'hmpoAutoFill-settings')
            .text('Settings')
            .on('click', function () { toggleSettings($settings) })
            .appendTo($container)
        var $settings = $('<div>')
            .appendTo($container)
        if (!sessionStorage.getItem('hmpoAutoFill-settings')) $settings.hide()
        for (var key in controls) {
            var $control;
            if (key == 'showCookieBanner') {
                $control = $('<span>')
                .attr('class', 'cookieSpan')
                .appendTo($settings)
            } else {
                $control = $('<span>')
                .appendTo($settings)
            }
            if (typeof controls[key] === 'string') {
                if (key == 'showCookieBanner') {
                    $('<input type="checkbox">')
                    .attr('type', 'checkbox')
                    .attr('id', 'hmpoAutoFill-' + key)
                    .attr('value', key)
                    .on('change', showCookieBanner)
                    .appendTo($control)
                } 
                else{
                    $('<input type="checkbox">')
                        .attr('type', 'checkbox')
                        .attr('id', 'hmpoAutoFill-' + key)
                        .attr('value', key)
                        .on('change', update)
                        .appendTo($control)
                }
                $('<label>')
                    .attr('for', 'hmpoAutoFill-' + key)
                    .text(controls[key])
                    .appendTo($control)
            } else {
                var $select = $('<select>')
                    .attr('id', 'hmpoAutoFill-' + key)
                    .on('change', update)
                    .appendTo($control)
                for (var item in controls[key]) {
                    $('<option>')
                        .attr('value', item)
                        .text(controls[key][item])
                        .appendTo($select)
                }
            }
        }
        $container.appendTo('body')
    }
    
    function showCookieBanner () {
        window.location.assign("?cookies=clear")

    }
    
    function update () {
        saveSettings()
        setRestrictions()
        setData()
    }

    function toggleSettings ($settings) {
        $settings.toggle()
        sessionStorage.setItem('hmpoAutoFill-settings', $settings.is(':visible') || '')
    }

    function getValue (key) {
        var selector = '#hmpoAutoFill-' + key
        if (typeof controls[key] === 'string') selector += ':checked'
        return $(selector).val()
    }

    function setData () {
        currentData = Object.assign({}, fillData.base)
        for (var key in controls) {
            Object.assign(currentData, fillData[getValue(key)])
        }
    };

    function setRestrictions () {
        for (var key in restrictions) {
            var disabled = true
            for (var item in restrictions[key]) {
                var value = $('#hmpoAutoFill-' + item).val()
                if (restrictions[key][item].includes(value)) disabled = false
            }
            $('#hmpoAutoFill-' + key).prop('disabled', disabled)
        }
    }

    function loadSettings () {
        for (var key in controls) {
            var value = sessionStorage.getItem('hmpoAutoFill-' + key)
            if (typeof controls[key] === 'string') {
                $('#hmpoAutoFill-' + key).prop('checked', Boolean(value))
            } else {
                $('#hmpoAutoFill-' + key).val(value || Object.keys(controls[key])[0])
            }
        }
    }

    function saveSettings () {
        for (var key in controls) {
            sessionStorage.setItem('hmpoAutoFill-' + key, getValue(key) || '')
        }
    }

    function fill () {
        for (var id in currentData) {
            var value = currentData[id]
            var valueKey = String(value).replace(/[^a-z0-9]/ig, '')
            var $el = $('#' + id)
            if (!$el.length) $el = $('#' + id + '-' + valueKey)
            if (!$el.length) $el = $('#' + id + '-' + valueKey + '-label')
            if (!$el.length) continue
            var type = ($el.attr('type') || 'unknown').toLowerCase()
            if (type === 'checkbox') {
                if ($el.prop('checked') !== value) $el.click()
            } else if (type === 'radio') {
                $el.click()
            } else {
                $el.val(value)
            }
        }

        var $button = $('button.govuk-button').first()
        if ($button.length) {
            return $button.click()
        }

        var buttonHref = $('a.govuk-button').first().attr('href')
        if (buttonHref) {
            window.location = buttonHref
            return
        }

        console.error('No continue button or link')
    }

    createControls()
    loadSettings()
    setRestrictions()
    setData()
})
