(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { var c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({ 1: [function (require, module, exports) {
    const accessibleAutocomplete = require('accessible-autocomplete')
    const addresses = require('../../data/addresses.json')
    const fullListOfCEaddresses = require('../../data/fullListOfCEaddresses.json')

    const combinedAddressPlaceOfDeathArray = []
    const combinedUsualAddressArray = []
    addresses.forEach(e => combinedAddressPlaceOfDeathArray.push(e.combinedAddress))
    fullListOfCEaddresses.forEach(e => combinedUsualAddressArray.push(e.combinedAddress))

    accessibleAutocomplete({
        element: document.querySelector('#my-autocomplete-container'),
        id: 'my-autocomplete', // To match it to the existing <label>.
        source: combinedAddressPlaceOfDeathArray,
        onConfirm: async (val) => {
            await autoFillPlaceOfDeathWhenCESelected(addresses, val)
        }
    })

    accessibleAutocomplete({
        element: document.querySelector('#my-autocomplete-container2'),
        id: 'my-autocomplete2', // To match it to the existing <label>.
        source: combinedUsualAddressArray,
        onConfirm: async (val) => {
            await autoFillUsualWhenCESelected(fullListOfCEaddresses, val)
        }
    })

    async function autoFillPlaceOfDeathWhenCESelected (addresses, val) {
    // get the field id where value is populated
        const deceasedPlaceOfDeathAddressLine1 = document.querySelector('#deceasedPlaceOfDeathAddressLine1')
        const deceasedPlaceOfDeathAddressLine2 = document.querySelector('#deceasedPlaceOfDeathAddressLine2')
        const deceasedPlaceOfDeathAddressStreet = document.querySelector('#deceasedPlaceOfDeathAddressStreet')
        const deceasedPlaceOfDeathAddressTown = document.querySelector('#deceasedPlaceOfDeathAddressTown')
        const deceasedPlaceOfDeathAddressCounty = document.querySelector('#deceasedPlaceOfDeathAddressCounty')
        const deceasedPlaceOfDeathAddressPostcode = document.querySelector('#deceasedPlaceOfDeathAddressPostcode')
        const divPlaceOfDeath = document.querySelector('#placeOfDeath')

        // get the exact match from the CE data
        const result = await searchByCombinedAddress(addresses, val)
        if (result) {
            if (result.address) {
                deceasedPlaceOfDeathAddressLine1.value = await extractNumber(result.address)
            }
            if (result.name) {
                deceasedPlaceOfDeathAddressLine2.value = result.name
            }
            if (result.address) {
                deceasedPlaceOfDeathAddressStreet.value = result.address
            }
            if (result.town) {
                deceasedPlaceOfDeathAddressTown.value = result.town
            }
            if (result.town) {
                deceasedPlaceOfDeathAddressCounty.value = result.town
            }
            if (result.postCode) {
                deceasedPlaceOfDeathAddressPostcode.value = result.postCode
            }
            divPlaceOfDeath.classList.remove('govuk-visually-hidden')
        }
    }

    async function autoFillUsualWhenCESelected (addresses, val) {
    // get the field id where value is populated
        const deceasedUsualCEAddressLine1 = document.querySelector('#deceasedUsualCEAddressLine1')
        const deceasedUsualCEAddressLine2 = document.querySelector('#deceasedUsualCEAddressLine2')
        const deceasedUsualCEAddressStreet = document.querySelector('#deceasedUsualCEAddressStreet')
        const deceasedUsualCEAddressTown = document.querySelector('#deceasedUsualCEAddressTown')
        const deceasedUsualCEAddressCounty = document.querySelector('#deceasedUsualCEAddressCounty')
        const deceasedUsualCEAddressPostcode = document.querySelector('#deceasedUsualCEAddressPostcode')
        const divUsualAddress = document.querySelector('#usualAddress')

        // get the exact match from the CE data
        const result = await searchByCombinedAddress(addresses, val)
        if (result) {
            if (result.address) {
                deceasedUsualCEAddressLine1.value = await extractNumber(result.address)
            }
            if (result.name) {
                deceasedUsualCEAddressLine2.value = result.name
            }
            if (result.address) {
                deceasedUsualCEAddressStreet.value = result.address
            }
            if (result.town) {
                deceasedUsualCEAddressTown.value = result.town
            }
            if (result.town) {
                deceasedUsualCEAddressCounty.value = result.town
            }
            if (result.postCode) {
                deceasedUsualCEAddressPostcode.value = result.postCode
            }
            divUsualAddress.classList.remove('govuk-visually-hidden')
        }
    }

    async function searchByCombinedAddress (data, query) {
        console.table([query, data])
        for (const item of data) {
            if (item.combinedAddress.toLowerCase() === query.toLowerCase()) {
                return await item
            }
        }
        return null
    }

    async function extractNumber (data) {
        const regex = /^\d+/
        const match = data.match(regex)
        return await match ? match[0] : null
    }
}, { '../../data/addresses.json': 2, '../../data/fullListOfCEaddresses.json': 3, 'accessible-autocomplete': 4 }], 2: [function (require, module, exports) {
    module.exports = [
        {
            ceCode: '43648',
            name: 'Highgate Lodge Care Home',
            address: '66 Highgate Road',
            town: 'Walsall West Midlands',
            postCode: 'WS1 3JE',
            districtCode: '075',
            combinedAddress: 'Highgate Lodge Care Home, 66 Highgate Road, Walsall West Midlands, WS1 3JE',
            retiredByOns: false
        },
        {
            ceCode: '42983',
            name: 'Castlehill Specialist Care Home',
            address: '390 Chester Road',
            town: 'Walsall',
            postCode: 'WS9 9DE',
            districtCode: '075',
            combinedAddress: 'Castlehill Specialist Care Home, 390 Chester Road, Walsall, WS9 9DE',
            retiredByOns: false
        },
        {
            ceCode: '42863',
            name: 'Willow Rose Care Home',
            address: '10 Stroud Avenue',
            town: 'Willenhall',
            postCode: 'WV124ET',
            districtCode: '075',
            combinedAddress: 'Willow Rose Care Home, 10 Stroud Avenue, Willenhall, WV124ET',
            retiredByOns: false
        },
        {
            ceCode: '42847',
            name: 'Kingsway Care Home',
            address: '69 Bilston Lane',
            town: 'Willenhall, West Midlands',
            postCode: 'WV132LJ',
            districtCode: '075',
            combinedAddress: 'Kingsway Care Home, 69 Bilston Lane, Willenhall, West Midlands, WV132LJ',
            retiredByOns: false
        },
        {
            ceCode: '41791',
            name: 'Cedar Falls Care Home',
            address: '83-89 Bescot Road',
            town: 'Walsall, West Midlands',
            postCode: 'WS2 9DG',
            districtCode: '075',
            combinedAddress: 'Cedar Falls Care Home, 83-89 Bescot Road, Walsall, West Midlands, WS2 9DG',
            retiredByOns: false
        },
        {
            ceCode: '41546',
            name: 'The Watermill Care Home',
            address: 'Goscote Lane',
            town: 'Goscote, Walsall',
            postCode: 'WS3 1SJ',
            districtCode: '075',
            combinedAddress: 'The Watermill Care Home, Goscote Lane, Goscote, Walsall, WS3 1SJ',
            retiredByOns: false
        },
        {
            ceCode: '41371',
            name: 'Walsall Healthcare NHS Trust Midwifery Led Unit',
            address: '4-10 Charles Street',
            town: 'Walsall',
            postCode: 'WS2 9LZ',
            districtCode: '075',
            combinedAddress: 'Walsall Healthcare NHS Trust Midwifery Led Unit, 4-10 Charles Street, Walsall, WS2 9LZ',
            retiredByOns: false
        },
        {
            ceCode: '40526',
            name: 'Harpers Villas Care Centre',
            address: '1-3 Bilston Lane',
            town: 'Willenhall',
            postCode: 'WV132QF',
            districtCode: '075',
            combinedAddress: 'Harpers Villas Care Centre, 1-3 Bilston Lane, Willenhall, WV132QF',
            retiredByOns: false
        },
        {
            ceCode: '39830',
            name: 'Fernwood Court Care Centre',
            address: '300-310 Wolverhampton Road West',
            town: 'Bentley, Walsall',
            postCode: 'WS2 0DS',
            districtCode: '075',
            combinedAddress: 'Fernwood Court Care Centre, 300-310 Wolverhampton Road West, Bentley, Walsall, WS2 0DS',
            retiredByOns: false
        },
        {
            ceCode: '39462',
            name: 'Delves Court Care Home',
            address: '2 Walstead Road',
            town: 'Walsall',
            postCode: 'WS5 4NZ',
            districtCode: '075',
            combinedAddress: 'Delves Court Care Home, 2 Walstead Road, Walsall, WS5 4NZ',
            retiredByOns: false
        },
        {
            ceCode: '39058',
            name: 'Swan House Care Home',
            address: 'Pooles Lane',
            town: 'Willenhall',
            postCode: 'WV125HJ',
            districtCode: '075',
            combinedAddress: 'Swan House Care Home, Pooles Lane, Willenhall, WV125HJ',
            retiredByOns: false
        },
        {
            ceCode: '37626',
            name: 'The Hamptons Care Home',
            address: 'Beacon Way',
            town: 'Walsall Wood',
            postCode: 'WS9 9HZ',
            districtCode: '075',
            combinedAddress: 'The Hamptons Care Home, Beacon Way, Walsall Wood, WS9 9HZ',
            retiredByOns: false
        },
        {
            ceCode: '36712',
            name: 'Stanbrook Care Home',
            address: 'Manor Road Precinct',
            town: 'Walsall',
            postCode: 'WS2 8RF',
            districtCode: '075',
            combinedAddress: 'Stanbrook Care Home, Manor Road Precinct, Walsall, WS2 8RF',
            retiredByOns: false
        },
        {
            ceCode: '31411',
            name: 'Chase Nursing Home',
            address: '70 Vicarage Road',
            town: 'Brownhills, Walsall',
            postCode: 'WS8 6AR',
            districtCode: '075',
            combinedAddress: 'Chase Nursing Home, 70 Vicarage Road, Brownhills, Walsall, WS8 6AR',
            retiredByOns: false
        },
        {
            ceCode: '27855',
            name: 'Calderfield Lodge',
            address: '12 Aldridge Road',
            town: 'Walsall',
            postCode: 'WS4 2JH',
            districtCode: '075',
            combinedAddress: 'Calderfield Lodge, 12 Aldridge Road, Walsall, WS4 2JH',
            retiredByOns: false
        },
        {
            ceCode: '24517',
            name: 'Castlefort Grange',
            address: 'Castlefort Road',
            town: 'Walsall Wood, Walsall',
            postCode: 'WS9 9JL',
            districtCode: '075',
            combinedAddress: 'Castlefort Grange, Castlefort Road, Walsall Wood, Walsall, WS9 9JL',
            retiredByOns: false
        },
        {
            ceCode: '21673',
            name: 'Castle View House',
            address: 'Castle View Close',
            town: 'Moxley, West Midlands',
            postCode: 'WS108SE',
            districtCode: '075',
            combinedAddress: 'Castle View House, Castle View Close, Moxley, West Midlands, WS108SE',
            retiredByOns: false
        },
        {
            ceCode: '11774',
            name: 'Sycamore House',
            address: '111 Birmingham Road',
            town: 'Walsall',
            postCode: 'WS1 2NL',
            districtCode: '075',
            combinedAddress: 'Sycamore House, 111 Birmingham Road, Walsall, WS1 2NL',
            retiredByOns: false
        },
        {
            ceCode: '11767',
            name: 'Walsall Palliative Care Centre',
            address: 'Goscote Lane',
            town: 'Walsall',
            postCode: 'WS3 1SJ',
            districtCode: '075',
            combinedAddress: 'Walsall Palliative Care Centre, Goscote Lane, Walsall, WS3 1SJ',
            retiredByOns: false
        }
    ]
}, {}], 3: [function (require, module, exports) {
    arguments[4][2][0].apply(exports, arguments)
}, { dup: 2 }], 4: [function (require, module, exports) {
    (function webpackUniversalModuleDefinition (e, t) { typeof exports === 'object' && typeof module === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define([], t) : typeof exports === 'object' ? exports.accessibleAutocomplete = t() : e.accessibleAutocomplete = t() })(window, function () { return (function (n) { var r = {}; function o (e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports } return o.m = n, o.c = r, o.d = function (e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, o.t = function (t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var r in t)o.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, o.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return o.d(t, 'a', t), t }, o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = '/', o(o.s = 37) }([function (e, t, n) { var m = n(1); var v = n(6); var y = n(7); var g = n(16); var _ = n(18); var b = 'prototype'; var w = function (e, t, n) { var r; var o; var i; var u; var a = e & w.F; var s = e & w.G; var l = e & w.S; var c = e & w.P; var p = e & w.B; var f = s ? m : l ? m[t] || (m[t] = {}) : (m[t] || {})[b]; var d = s ? v : v[t] || (v[t] = {}); var h = d[b] || (d[b] = {}); for (r in s && (n = t), n)i = ((o = !a && f && f[r] !== undefined) ? f : n)[r], u = p && o ? _(i, m) : c && typeof i === 'function' ? _(Function.call, i) : i, f && g(f, r, i, e & w.U), d[r] != i && y(d, r, u), c && h[r] != i && (h[r] = i) }; m.core = v, w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, e.exports = w }, function (e, t) { var n = e.exports = typeof window !== 'undefined' && window.Math == Math ? window : typeof self !== 'undefined' && self.Math == Math ? self : Function('return this')(); typeof __g === 'number' && (__g = n) }, function (e, t) { e.exports = function (e) { return typeof e === 'object' ? e !== null : typeof e === 'function' } }, function (e, t, n) { e.exports = !n(4)(function () { return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7 }) }, function (e, t) { e.exports = function (e) { try { return !!e() } catch (t) { return !0 } } }, function (e, t, n) { 'use strict'; n.r(t), n.d(t, 'h', function () { return r }), n.d(t, 'createElement', function () { return r }), n.d(t, 'cloneElement', function () { return i }), n.d(t, 'Component', function () { return g }), n.d(t, 'render', function () { return _ }), n.d(t, 'rerender', function () { return f }), n.d(t, 'options', function () { return E }); var s = function s () {}; var E = {}; var l = []; var c = []; function r (e, t) { var n; var r; var o; var i; var u = c; for (i = arguments.length; i-- > 2;)l.push(arguments[i]); for (t && t.children != null && (l.length || l.push(t.children), delete t.children); l.length;) if ((r = l.pop()) && r.pop !== undefined) for (i = r.length; i--;)l.push(r[i]); else typeof r === 'boolean' && (r = null), (o = typeof e !== 'function') && (r == null ? r = '' : typeof r === 'number' ? r = String(r) : typeof r !== 'string' && (o = !1)), o && n ? u[u.length - 1] += r : u === c ? u = [r] : u.push(r), n = o; var a = new s(); return a.nodeName = e, a.children = u, a.attributes = t == null ? undefined : t, a.key = t == null ? undefined : t.key, E.vnode !== undefined && E.vnode(a), a } function M (e, t) { for (var n in t)e[n] = t[n]; return e } var o = typeof Promise === 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout; function i (e, t) { return r(e.nodeName, M(M({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children) } var p = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i; var u = []; function a (e) { !e._dirty && (e._dirty = !0) && u.push(e) == 1 && (E.debounceRendering || o)(f) } function f () { var e; var t = u; for (u = []; e = t.pop();)e._dirty && V(e) } function N (e, t) { return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase() } function I (e) { var t = M({}, e.attributes); t.children = e.children; var n = e.nodeName.defaultProps; if (n !== undefined) for (var r in n)t[r] === undefined && (t[r] = n[r]); return t } function k (e) { var t = e.parentNode; t && t.removeChild(e) } function v (e, t, n, r, o) { if (t === 'className' && (t = 'class'), t === 'key');else if (t === 'ref')n && n(null), r && r(e); else if (t !== 'class' || o) if (t === 'style') { if (r && typeof r !== 'string' && typeof n !== 'string' || (e.style.cssText = r || ''), r && typeof r === 'object') { if (typeof n !== 'string') for (var i in n)i in r || (e.style[i] = ''); for (var i in r)e.style[i] = typeof r[i] === 'number' && !1 === p.test(i) ? r[i] + 'px' : r[i] } } else if (t === 'dangerouslySetInnerHTML')r && (e.innerHTML = r.__html || ''); else if (t[0] == 'o' && t[1] == 'n') { var u = t !== (t = t.replace(/Capture$/, '')); t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, d, u) : e.removeEventListener(t, d, u), (e._listeners || (e._listeners = {}))[t] = r } else if (t !== 'list' && t !== 'type' && !o && t in e) { try { e[t] = r == null ? '' : r } catch (s) {}r != null && !1 !== r || t == 'spellcheck' || e.removeAttribute(t) } else { var a = o && t !== (t = t.replace(/^xlink:?/, '')); r == null || !1 === r ? a ? e.removeAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase()) : e.removeAttribute(t) : typeof r !== 'function' && (a ? e.setAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase(), r) : e.setAttribute(t, r)) } else e.className = r || '' } function d (e) { return this._listeners[e.type](E.event && E.event(e) || e) } var A = []; var P = 0; var j = !1; var L = !1; function T () { for (var e; e = A.pop();)E.afterMount && E.afterMount(e), e.componentDidMount && e.componentDidMount() } function B (e, t, n, r, o, i) { P++ || (j = o != null && o.ownerSVGElement !== undefined, L = e != null && !('__preactattr_' in e)); var u = D(e, t, n, r, i); return o && u.parentNode !== o && o.appendChild(u), --P || (L = !1, i || T()), u } function D (e, t, n, r, o) { var i = e; var u = j; if (t != null && typeof t !== 'boolean' || (t = ''), typeof t === 'string' || typeof t === 'number') return e && e.splitText !== undefined && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), F(e, !0))), i.__preactattr_ = !0, i; var a = t.nodeName; if (typeof a === 'function') return (function d (e, t, n, r) { var o = e && e._component; var i = o; var u = e; var a = o && e._componentConstructor === t.nodeName; var s = a; var l = I(t); for (;o && !s && (o = o._parentComponent);)s = o.constructor === t.nodeName; o && s && (!r || o._component) ? (U(o, l, 3, n, r), e = o.base) : (i && !a && (q(i), e = u = null), o = R(t.nodeName, l, n), e && !o.nextBase && (o.nextBase = e, u = null), U(o, l, 1, n, r), e = o.base, u && e !== u && (u._component = null, F(u, !1))); return e }(e, t, n, r)); if (j = a === 'svg' || a !== 'foreignObject' && j, a = String(a), (!e || !N(e, a)) && (i = (function h (e, t) { var n = t ? document.createElementNS('http://www.w3.org/2000/svg', e) : document.createElement(e); return n.normalizedNodeName = e, n }(a, j)), e)) { for (;e.firstChild;)i.appendChild(e.firstChild); e.parentNode && e.parentNode.replaceChild(i, e), F(e, !0) } var s = i.firstChild; var l = i.__preactattr_; var c = t.children; if (l == null) { l = i.__preactattr_ = {}; for (var p = i.attributes, f = p.length; f--;)l[p[f].name] = p[f].value } return !L && c && c.length === 1 && typeof c[0] === 'string' && s != null && s.splitText !== undefined && s.nextSibling == null ? s.nodeValue != c[0] && (s.nodeValue = c[0]) : (c && c.length || s != null) && (function S (e, t, n, r, o) { var i; var u; var a; var s; var l; var c = e.childNodes; var p = []; var f = {}; var d = 0; var h = 0; var m = c.length; var v = 0; var y = t ? t.length : 0; if (m !== 0) for (var g = 0; g < m; g++) { var _ = c[g]; var b = _.__preactattr_; var w = y && b ? _._component ? _._component.__key : b.key : null; w != null ? (d++, f[w] = _) : (b || (_.splitText !== undefined ? !o || _.nodeValue.trim() : o)) && (p[v++] = _) } if (y !== 0) for (var g = 0; g < y; g++) { s = t[g], l = null; var w = s.key; if (w != null)d && f[w] !== undefined && (l = f[w], f[w] = undefined, d--); else if (h < v) for (i = h; i < v; i++) if (p[i] !== undefined && (x = u = p[i], C = o, typeof (O = s) === 'string' || typeof O === 'number' ? x.splitText !== undefined : typeof O.nodeName === 'string' ? !x._componentConstructor && N(x, O.nodeName) : C || x._componentConstructor === O.nodeName)) { l = u, p[i] = undefined, i === v - 1 && v--, i === h && h++; break }l = D(l, s, n, r), a = c[g], l && l !== e && l !== a && (a == null ? e.appendChild(l) : l === a.nextSibling ? k(a) : e.insertBefore(l, a)) } var x, O, C; if (d) for (var g in f)f[g] !== undefined && F(f[g], !1); for (;h <= v;)(l = p[v--]) !== undefined && F(l, !1) }(i, c, n, r, L || l.dangerouslySetInnerHTML != null)), (function m (e, t, n) { var r; for (r in n)t && t[r] != null || n[r] == null || v(e, r, n[r], n[r] = undefined, j); for (r in t)r === 'children' || r === 'innerHTML' || r in n && t[r] === (r === 'value' || r === 'checked' ? e[r] : n[r]) || v(e, r, n[r], n[r] = t[r], j) }(i, t.attributes, l)), j = u, i } function F (e, t) { var n = e._component; n ? q(n) : (e.__preactattr_ != null && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && e.__preactattr_ != null || k(e), h(e)) } function h (e) { for (e = e.lastChild; e;) { var t = e.previousSibling; F(e, !0), e = t } } var m = []; function R (e, t, n) { var r; var o = m.length; for (e.prototype && e.prototype.render ? (r = new e(t, n), g.call(r, t, n)) : ((r = new g(t, n)).constructor = e, r.render = y); o--;) if (m[o].constructor === e) return r.nextBase = m[o].nextBase, m.splice(o, 1), r; return r } function y (e, t, n) { return this.constructor(e, n) } function U (e, t, n, r, o) { e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, typeof e.constructor.getDerivedStateFromProps === 'undefined' && (!e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, n !== 0 && (n !== 1 && !1 === E.syncComponentUpdates && e.base ? a(e) : V(e, 1, o)), e.__ref && e.__ref(e)) } function V (e, t, n, r) { if (!e._disable) { var o; var i; var u; var a = e.props; var s = e.state; var l = e.context; var c = e.prevProps || a; var p = e.prevState || s; var f = e.prevContext || l; var d = e.base; var h = e.nextBase; var m = d || h; var v = e._component; var y = !1; var g = f; if (e.constructor.getDerivedStateFromProps && (s = M(M({}, s), e.constructor.getDerivedStateFromProps(a, s)), e.state = s), d && (e.props = c, e.state = p, e.context = f, t !== 2 && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(a, s, l) ? y = !0 : e.componentWillUpdate && e.componentWillUpdate(a, s, l), e.props = a, e.state = s, e.context = l), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !y) { o = e.render(a, s, l), e.getChildContext && (l = M(M({}, l), e.getChildContext())), d && e.getSnapshotBeforeUpdate && (g = e.getSnapshotBeforeUpdate(c, p)); var _; var b; var w = o && o.nodeName; if (typeof w === 'function') { var x = I(o); (i = v) && i.constructor === w && x.key == i.__key ? U(i, x, 1, l, !1) : (_ = i, e._component = i = R(w, x, l), i.nextBase = i.nextBase || h, i._parentComponent = e, U(i, x, 0, l, !1), V(i, 1, n, !0)), b = i.base } else u = m, (_ = v) && (u = e._component = null), (m || t === 1) && (u && (u._component = null), b = (function B (t, n, r, o, i, u) { P++ || (j = i != null && i.ownerSVGElement !== undefined, L = t != null && !('__preactattr_' in t)); var a = D(t, n, r, o, u); return i && a.parentNode !== i && i.appendChild(a), --P || (L = !1, u || T()), a }(u, o, l, n || !d, m && m.parentNode, !0))); if (m && b !== m && i !== v) { var O = m.parentNode; O && b !== O && (O.replaceChild(b, m), _ || (m._component = null, F(m, !1))) } if (_ && q(_), (e.base = b) && !r) { for (var C = e, S = e; S = S._parentComponent;)(C = S).base = b; b._component = C, b._componentConstructor = C.constructor } } for (!d || n ? A.unshift(e) : y || (e.componentDidUpdate && e.componentDidUpdate(c, p, g), E.afterUpdate && E.afterUpdate(e)); e._renderCallbacks.length;)e._renderCallbacks.pop().call(e); P || r || T() } } function q (e) { E.beforeUnmount && E.beforeUnmount(e); var t = e.base; e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null; var n = e._component; n ? q(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), k(e.nextBase = t), m.push(e), h(t)), e.__ref && e.__ref(null) } function g (e, t) { this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = [] } function _ (e, t, n) { return B(n, e, {}, !1, t, !1) }M(g.prototype, { setState: function (e, t) { this.prevState || (this.prevState = this.state), this.state = M(M({}, this.state), typeof e === 'function' ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), a(this) }, forceUpdate: function (e) { e && this._renderCallbacks.push(e), V(this, 2) }, render: function _ () {} }); var b = { h: r, createElement: r, cloneElement: i, Component: g, render: _, rerender: f, options: E }; t.default = b }, function (e, t) { var n = e.exports = { version: '2.5.7' }; typeof __e === 'number' && (__e = n) }, function (e, t, n) { var r = n(8); var o = n(40); e.exports = n(3) ? function (e, t, n) { return r.f(e, t, o(1, n)) } : function (e, t, n) { return e[t] = n, e } }, function (e, t, n) { var o = n(9); var i = n(38); var u = n(39); var a = Object.defineProperty; t.f = n(3) ? Object.defineProperty : function (e, t, n) { if (o(e), t = u(t, !0), o(n), i) try { return a(e, t, n) } catch (r) {} if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!'); return 'value' in n && (e[t] = n.value), e } }, function (e, t, n) { var r = n(2); e.exports = function (e) { if (!r(e)) throw TypeError(e + ' is not an object!'); return e } }, function (e, t) { var n = 0; var r = Math.random(); e.exports = function (e) { return 'Symbol('.concat(e === undefined ? '' : e, ')_', (++n + r).toString(36)) } }, function (e, t, n) { var r = n(22); e.exports = Object('z').propertyIsEnumerable(0) ? Object : function (e) { return r(e) == 'String' ? e.split('') : Object(e) } }, function (e, t) { e.exports = function (e) { if (e == undefined) throw TypeError("Can't call method on  " + e); return e } }, function (e, t, n) { 'use strict'; var r = n(4); e.exports = function (e, t) { return !!e && r(function () { t ? e.call(null, function () {}, 1) : e.call(null) }) } }, function (e, t, n) { var r = n(0); r(r.S + r.F, 'Object', { assign: n(41) }) }, function (e, t, n) { var r = n(2); var o = n(1).document; var i = r(o) && r(o.createElement); e.exports = function (e) { return i ? o.createElement(e) : {} } }, function (e, t, n) { var i = n(1); var u = n(7); var a = n(17); var s = n(10)('src'); var r = 'toString'; var o = Function[r]; var l = ('' + o).split(r); n(6).inspectSource = function (e) { return o.call(e) }, (e.exports = function (e, t, n, r) { var o = typeof n === 'function'; o && (a(n, 'name') || u(n, 'name', t)), e[t] !== n && (o && (a(n, s) || u(n, s, e[t] ? '' + e[t] : l.join(String(t)))), e === i ? e[t] = n : r ? e[t] ? e[t] = n : u(e, t, n) : (delete e[t], u(e, t, n))) })(Function.prototype, r, function () { return typeof this === 'function' && this[s] || o.call(this) }) }, function (e, t) { var n = {}.hasOwnProperty; e.exports = function (e, t) { return n.call(e, t) } }, function (e, t, n) { var i = n(19); e.exports = function (r, o, e) { if (i(r), o === undefined) return r; switch (e) { case 1:return function (e) { return r.call(o, e) }; case 2:return function (e, t) { return r.call(o, e, t) }; case 3:return function (e, t, n) { return r.call(o, e, t, n) } } return function () { return r.apply(o, arguments) } } }, function (e, t) { e.exports = function (e) { if (typeof e !== 'function') throw TypeError(e + ' is not a function!'); return e } }, function (e, t, n) { var r = n(42); var o = n(28); e.exports = Object.keys || function (e) { return r(e, o) } }, function (e, t, n) { var r = n(11); var o = n(12); e.exports = function (e) { return r(o(e)) } }, function (e, t) { var n = {}.toString; e.exports = function (e) { return n.call(e).slice(8, -1) } }, function (e, t, n) { var s = n(21); var l = n(24); var c = n(43); e.exports = function (a) { return function (e, t, n) { var r; var o = s(e); var i = l(o.length); var u = c(n, i); if (a && t != t) { for (;u < i;) if ((r = o[u++]) != r) return !0 } else for (;u < i; u++) if ((a || u in o) && o[u] === t) return a || u || 0; return !a && -1 } } }, function (e, t, n) { var r = n(25); var o = Math.min; e.exports = function (e) { return e > 0 ? o(r(e), 9007199254740991) : 0 } }, function (e, t) { var n = Math.ceil; var r = Math.floor; e.exports = function (e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) } }, function (e, t, n) { var r = n(27)('keys'); var o = n(10); e.exports = function (e) { return r[e] || (r[e] = o(e)) } }, function (e, t, n) { var r = n(6); var o = n(1); var i = '__core-js_shared__'; var u = o[i] || (o[i] = {}); (e.exports = function (e, t) { return u[e] || (u[e] = t !== undefined ? t : {}) })('versions', []).push({ version: r.version, mode: n(44) ? 'pure' : 'global', copyright: '© 2018 Denis Pushkarev (zloirock.ru)' }) }, function (e, t) { e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',') }, function (e, t, n) { var r = n(12); e.exports = function (e) { return Object(r(e)) } }, function (e, t, n) { var r = n(8).f; var o = Function.prototype; var i = /^\s*function ([^ (]*)/; 'name' in o || n(3) && r(o, 'name', { configurable: !0, get: function () { try { return ('' + this).match(i)[1] } catch (e) { return '' } } }) }, function (e, t, n) { 'use strict'; var r = n(0); var o = n(32)(1); r(r.P + r.F * !n(13)([].map, !0), 'Array', { map: function (e) { return o(this, e, arguments[1]) } }) }, function (e, t, n) { var _ = n(18); var b = n(11); var w = n(29); var x = n(24); var r = n(47); e.exports = function (p, e) { var f = p == 1; var d = p == 2; var h = p == 3; var m = p == 4; var v = p == 6; var y = p == 5 || v; var g = e || r; return function (e, t, n) { for (var r, o, i = w(e), u = b(i), a = _(t, n, 3), s = x(u.length), l = 0, c = f ? g(e, s) : d ? g(e, 0) : undefined; l < s; l++) if ((y || l in u) && (o = a(r = u[l], l, i), p)) if (f)c[l] = o; else if (o) switch (p) { case 3:return !0; case 5:return r; case 6:return l; case 2:c.push(r) } else if (m) return !1; return v ? -1 : h || m ? m : c } } }, function (e, t, n) { var r = n(22); e.exports = Array.isArray || function (e) { return r(e) == 'Array' } }, function (e, t, n) { var r = n(27)('wks'); var o = n(10); var i = n(1).Symbol; var u = typeof i === 'function'; (e.exports = function (e) { return r[e] || (r[e] = u && i[e] || (u ? i : o)('Symbol.' + e)) }).store = r }, function (e, t, n) { 'use strict'; var r = n(0); var o = n(23)(!1); var i = [].indexOf; var u = !!i && 1 / [1].indexOf(1, -0) < 0; r(r.P + r.F * (u || !n(13)(i)), 'Array', { indexOf: function (e) { return u ? i.apply(this, arguments) || 0 : o(this, e, arguments[1]) } }) }, function (e, t, n) { var r = n(0); r(r.S, 'Object', { create: n(52) }) }, function (e, t, n) { 'use strict'; t.__esModule = !0, t.default = void 0, n(14), n(30), n(31), n(35), n(49), n(50); var r = n(5); var o = (function s (e) { return e && e.__esModule ? e : { default: e } }(n(51))); function i (e) { if (!e.element) throw new Error('element is not defined'); if (!e.id) throw new Error('id is not defined'); if (!e.source) throw new Error('source is not defined'); Array.isArray(e.source) && (e.source = u(e.source)), (0, r.render)((0, r.createElement)(o.default, e), e.element) } var u = function u (n) { return function (t, e) { e(n.filter(function (e) { return e.toLowerCase().indexOf(t.toLowerCase()) !== -1 })) } }; i.enhanceSelectElement = function (n) { if (!n.selectElement) throw new Error('selectElement is not defined'); if (!n.source) { var e = [].filter.call(n.selectElement.options, function (e) { return e.value || n.preserveNullOptions }); n.source = e.map(function (e) { return e.textContent || e.innerText }) } if (n.onConfirm = n.onConfirm || function (t) { var e = [].filter.call(n.selectElement.options, function (e) { return (e.textContent || e.innerText) === t })[0]; e && (e.selected = !0) }, n.selectElement.value || n.defaultValue === undefined) { var t = n.selectElement.options[n.selectElement.options.selectedIndex]; n.defaultValue = t.textContent || t.innerText }n.name === undefined && (n.name = ''), n.id === undefined && (n.selectElement.id === undefined ? n.id = '' : n.id = n.selectElement.id), n.autoselect === undefined && (n.autoselect = !0); var r = document.createElement('div'); n.selectElement.parentNode.insertBefore(r, n.selectElement), i(Object.assign({}, n, { element: r })), n.selectElement.style.display = 'none', n.selectElement.id = n.selectElement.id + '-select' }; var a = i; t.default = a }, function (e, t, n) { e.exports = !n(3) && !n(4)(function () { return Object.defineProperty(n(15)('div'), 'a', { get: function () { return 7 } }).a != 7 }) }, function (e, t, n) { var o = n(2); e.exports = function (e, t) { if (!o(e)) return e; var n, r; if (t && typeof (n = e.toString) === 'function' && !o(r = n.call(e))) return r; if (typeof (n = e.valueOf) === 'function' && !o(r = n.call(e))) return r; if (!t && typeof (n = e.toString) === 'function' && !o(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") } }, function (e, t) { e.exports = function (e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function (e, t, n) { 'use strict'; var f = n(20); var d = n(45); var h = n(46); var m = n(29); var v = n(11); var o = Object.assign; e.exports = !o || n(4)(function () { var e = {}; var t = {}; var n = Symbol(); var r = 'abcdefghijklmnopqrst'; return e[n] = 7, r.split('').forEach(function (e) { t[e] = e }), o({}, e)[n] != 7 || Object.keys(o({}, t)).join('') != r }) ? function (e, t) { for (var n = m(e), r = arguments.length, o = 1, i = d.f, u = h.f; o < r;) for (var a, s = v(arguments[o++]), l = i ? f(s).concat(i(s)) : f(s), c = l.length, p = 0; p < c;)u.call(s, a = l[p++]) && (n[a] = s[a]); return n } : o }, function (e, t, n) { var u = n(17); var a = n(21); var s = n(23)(!1); var l = n(26)('IE_PROTO'); e.exports = function (e, t) { var n; var r = a(e); var o = 0; var i = []; for (n in r)n != l && u(r, n) && i.push(n); for (;t.length > o;)u(r, n = t[o++]) && (~s(i, n) || i.push(n)); return i } }, function (e, t, n) { var r = n(25); var o = Math.max; var i = Math.min; e.exports = function (e, t) { return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t) } }, function (e, t) { e.exports = !1 }, function (e, t) { t.f = Object.getOwnPropertySymbols }, function (e, t) { t.f = {}.propertyIsEnumerable }, function (e, t, n) { var r = n(48); e.exports = function (e, t) { return new (r(e))(t) } }, function (e, t, n) { var r = n(2); var o = n(33); var i = n(34)('species'); e.exports = function (e) { var t; return o(e) && (typeof (t = e.constructor) !== 'function' || t !== Array && !o(t.prototype) || (t = undefined), r(t) && (t = t[i]) === null && (t = undefined)), t === undefined ? Array : t } }, function (e, t, n) { 'use strict'; var r = n(0); var o = n(32)(2); r(r.P + r.F * !n(13)([].filter, !0), 'Array', { filter: function (e) { return o(this, e, arguments[1]) } }) }, function (e, t, n) { var r = n(0); r(r.S, 'Array', { isArray: n(33) }) }, function (e, t, n) { 'use strict'; t.__esModule = !0, t.default = void 0, n(14), n(36), n(30), n(31), n(35), n(55), n(58); var $ = n(5); var J = o(n(60)); var r = o(n(61)); function o (e) { return e && e.__esModule ? e : { default: e } } function X () { return (X = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) } function i (e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } var u = { 13: 'enter', 27: 'escape', 32: 'space', 38: 'up', 40: 'down' }; function Y () { return typeof navigator !== 'undefined' && !(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || !navigator.userAgent.match(/AppleWebKit/g)) } var a = (function (n) { function e (e) { var t; return (t = n.call(this, e) || this).elementReferences = {}, t.state = { focused: null, hovered: null, menuOpen: !1, options: e.defaultValue ? [e.defaultValue] : [], query: e.defaultValue, validChoiceMade: !1, selected: null, ariaHint: !0 }, t.handleComponentBlur = t.handleComponentBlur.bind(i(i(t))), t.handleKeyDown = t.handleKeyDown.bind(i(i(t))), t.handleUpArrow = t.handleUpArrow.bind(i(i(t))), t.handleDownArrow = t.handleDownArrow.bind(i(i(t))), t.handleEnter = t.handleEnter.bind(i(i(t))), t.handlePrintableKey = t.handlePrintableKey.bind(i(i(t))), t.handleListMouseLeave = t.handleListMouseLeave.bind(i(i(t))), t.handleOptionBlur = t.handleOptionBlur.bind(i(i(t))), t.handleOptionClick = t.handleOptionClick.bind(i(i(t))), t.handleOptionFocus = t.handleOptionFocus.bind(i(i(t))), t.handleOptionMouseDown = t.handleOptionMouseDown.bind(i(i(t))), t.handleOptionMouseEnter = t.handleOptionMouseEnter.bind(i(i(t))), t.handleInputBlur = t.handleInputBlur.bind(i(i(t))), t.handleInputChange = t.handleInputChange.bind(i(i(t))), t.handleInputFocus = t.handleInputFocus.bind(i(i(t))), t.pollInputElement = t.pollInputElement.bind(i(i(t))), t.getDirectInputChanges = t.getDirectInputChanges.bind(i(i(t))), t }(function r (e, t) { e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t })(e, n); var t = e.prototype; return t.isQueryAnOption = function (e, t) { var n = this; return t.map(function (e) { return n.templateInputValue(e).toLowerCase() }).indexOf(e.toLowerCase()) !== -1 }, t.componentDidMount = function () { this.pollInputElement() }, t.componentWillUnmount = function () { clearTimeout(this.$pollInput) }, t.pollInputElement = function () { var e = this; this.getDirectInputChanges(), this.$pollInput = setTimeout(function () { e.pollInputElement() }, 100) }, t.getDirectInputChanges = function () { var e = this.elementReferences[-1]; e && e.value !== this.state.query && this.handleInputChange({ target: { value: e.value } }) }, t.componentDidUpdate = function (e, t) { var n = this.state.focused; var r = n === null; var o = t.focused !== n; o && !r && this.elementReferences[n].focus(); var i = n === -1; var u = o && t.focused === null; if (i && u) { var a = this.elementReferences[n]; a.setSelectionRange(0, a.value.length) } }, t.hasAutoselect = function () { return !Y() && this.props.autoselect }, t.templateInputValue = function (e) { var t = this.props.templates && this.props.templates.inputValue; return t ? t(e) : e }, t.templateSuggestion = function (e) { var t = this.props.templates && this.props.templates.suggestion; return t ? t(e) : e }, t.handleComponentBlur = function (e) { var t; var n = this.state; var r = n.options; var o = n.query; var i = n.selected; this.props.confirmOnBlur ? (t = e.query || o, this.props.onConfirm(r[i])) : t = o, this.setState({ focused: null, menuOpen: e.menuOpen || !1, query: t, selected: null, validChoiceMade: this.isQueryAnOption(t, r) }) }, t.handleListMouseLeave = function (e) { this.setState({ hovered: null }) }, t.handleOptionBlur = function (e, t) { var n = this.state; var r = n.focused; var o = n.menuOpen; var i = n.options; var u = n.selected; var a = e.relatedTarget === null; var s = e.relatedTarget === this.elementReferences[-1]; var l = r !== t && r !== -1; if (!l && a || !(l || s)) { var c = o && Y(); this.handleComponentBlur({ menuOpen: c, query: this.templateInputValue(i[u]) }) } }, t.handleInputBlur = function (e) { var t = this.state; var n = t.focused; var r = t.menuOpen; var o = t.options; var i = t.query; var u = t.selected; if (!(n !== -1)) { var a = r && Y(); var s = Y() ? i : this.templateInputValue(o[u]); this.handleComponentBlur({ menuOpen: a, query: s }) } }, t.handleInputChange = function (e) { var n = this; var t = this.props; var r = t.minLength; var o = t.source; var i = t.showAllValues; var u = this.hasAutoselect(); var a = e.target.value; var s = a.length === 0; var l = this.state.query.length !== a.length; var c = a.length >= r; this.setState({ query: a, ariaHint: s }), i || !s && l && c ? o(a, function (e) { var t = e.length > 0; n.setState({ menuOpen: t, options: e, selected: u && t ? 0 : -1, validChoiceMade: !1 }) }) : !s && c || this.setState({ menuOpen: !1, options: [] }) }, t.handleInputClick = function (e) { this.handleInputChange(e) }, t.handleInputFocus = function (e) { var t = this.state; var n = t.query; var r = t.validChoiceMade; var o = t.options; var i = this.props.minLength; var u = !r && n.length >= i && o.length > 0; u ? this.setState(function (e) { var t = e.menuOpen; return { focused: -1, menuOpen: u || t, selected: -1 } }) : this.setState({ focused: -1 }) }, t.handleOptionFocus = function (e) { this.setState({ focused: e, hovered: null, selected: e }) }, t.handleOptionMouseEnter = function (e, t) { Y() || this.setState({ hovered: t }) }, t.handleOptionClick = function (e, t) { var n = this.state.options[t]; var r = this.templateInputValue(n); this.props.onConfirm(n), this.setState({ focused: -1, hovered: null, menuOpen: !1, query: r, selected: -1, validChoiceMade: !0 }), this.forceUpdate() }, t.handleOptionMouseDown = function (e) { e.preventDefault() }, t.handleUpArrow = function (e) { e.preventDefault(); var t = this.state; var n = t.menuOpen; var r = t.selected; r !== -1 && n && this.handleOptionFocus(r - 1) }, t.handleDownArrow = function (e) { var t = this; if (e.preventDefault(), this.props.showAllValues && !1 === this.state.menuOpen)e.preventDefault(), this.props.source('', function (e) { t.setState({ menuOpen: !0, options: e, selected: 0, focused: 0, hovered: null }) }); else if (!0 === this.state.menuOpen) { var n = this.state; var r = n.menuOpen; var o = n.options; var i = n.selected; i !== o.length - 1 && r && this.handleOptionFocus(i + 1) } }, t.handleSpace = function (e) { var t = this; this.props.showAllValues && !1 === this.state.menuOpen && this.state.query === '' && (e.preventDefault(), this.props.source('', function (e) { t.setState({ menuOpen: !0, options: e }) })), this.state.focused !== -1 && (e.preventDefault(), this.handleOptionClick(e, this.state.focused)) }, t.handleEnter = function (e) { this.state.menuOpen && (e.preventDefault(), this.state.selected >= 0 && this.handleOptionClick(e, this.state.selected)) }, t.handlePrintableKey = function (e) { var t = this.elementReferences[-1]; e.target === t || t.focus() }, t.handleKeyDown = function (e) { switch (u[e.keyCode]) { case 'up':this.handleUpArrow(e); break; case 'down':this.handleDownArrow(e); break; case 'space':this.handleSpace(e); break; case 'enter':this.handleEnter(e); break; case 'escape':this.handleComponentBlur({ query: this.state.query }); break; default:(function t (e) { return e > 47 && e < 58 || e === 32 || e === 8 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223 })(e.keyCode) && this.handlePrintableKey(e) } }, t.render = function () { var e; var i = this; var t = this.props; var n = t.cssNamespace; var r = t.displayMenu; var u = t.id; var o = t.minLength; var a = t.name; var s = t.placeholder; var l = t.required; var c = t.showAllValues; var p = t.tNoResults; var f = t.tStatusQueryTooShort; var d = t.tStatusNoResults; var h = t.tStatusSelectedOption; var m = t.tStatusResults; var v = t.tAssistiveHint; var y = t.dropdownArrow; var g = this.state; var _ = g.focused; var b = g.hovered; var w = g.menuOpen; var x = g.options; var O = g.query; var C = g.selected; var S = g.ariaHint; var E = g.validChoiceMade; var M = this.hasAutoselect(); var N = _ === -1; var I = x.length === 0; var k = O.length !== 0; var A = O.length >= o; var P = this.props.showNoOptionsFound && N && I && k && A; var j = n + '__wrapper'; var L = n + '__input'; var T = _ !== null ? ' ' + L + '--focused' : ''; var B = this.props.showAllValues ? ' ' + L + '--show-all-values' : ' ' + L + '--default'; var D = n + '__dropdown-arrow-down'; var F = _ !== -1 && _ !== null; var R = n + '__menu'; var U = R + '--' + r; var V = R + '--' + (w || P ? 'visible' : 'hidden'); var q = n + '__option'; var W = n + '__hint'; var H = this.templateInputValue(x[C]); var K = H && H.toLowerCase().indexOf(O.toLowerCase()) === 0 && M ? O + H.substr(O.length) : ''; var Q = u + '__assistiveHint'; var z = S ? { 'aria-describedby': Q } : null; return c && typeof (e = y({ className: D })) === 'string' && (e = (0, $.createElement)('div', { className: n + '__dropdown-arrow-down-wrapper', dangerouslySetInnerHTML: { __html: e } })), (0, $.createElement)('div', { className: j, onKeyDown: this.handleKeyDown }, (0, $.createElement)(J.default, { id: u, length: x.length, queryLength: O.length, minQueryLength: o, selectedOption: this.templateInputValue(x[C]), selectedOptionIndex: C, validChoiceMade: E, isInFocus: this.state.focused !== null, tQueryTooShort: f, tNoResults: d, tSelectedOption: h, tResults: m }), K && (0, $.createElement)('span', null, (0, $.createElement)('input', { className: W, readonly: !0, tabIndex: '-1', value: K })), (0, $.createElement)('input', X({ 'aria-expanded': w ? 'true' : 'false', 'aria-activedescendant': !!F && u + '__option--' + _, 'aria-owns': u + '__listbox', 'aria-autocomplete': this.hasAutoselect() ? 'both' : 'list' }, z, { autoComplete: 'off', className: '' + L + T + B, id: u, onClick: function (e) { return i.handleInputClick(e) }, onBlur: this.handleInputBlur }, (function G (e) { return { onInput: e } }(this.handleInputChange)), { onFocus: this.handleInputFocus, name: a, placeholder: s, ref: function (e) { i.elementReferences[-1] = e }, type: 'text', role: 'combobox', required: l, value: O })), e, (0, $.createElement)('ul', { className: R + ' ' + U + ' ' + V, onMouseLeave: function (e) { return i.handleListMouseLeave(e) }, id: u + '__listbox', role: 'listbox' }, x.map(function (e, t) { var n = (_ === -1 ? C === t : _ === t) && b === null ? ' ' + q + '--focused' : ''; var r = t % 2 ? ' ' + q + '--odd' : ''; var o = Y() ? '<span id=' + u + '__option-suffix--' + t + ' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' + (t + 1) + ' of ' + x.length + '</span>' : ''; return (0, $.createElement)('li', { 'aria-selected': _ === t ? 'true' : 'false', className: '' + q + n + r, dangerouslySetInnerHTML: { __html: i.templateSuggestion(e) + o }, id: u + '__option--' + t, key: t, onBlur: function (e) { return i.handleOptionBlur(e, t) }, onClick: function (e) { return i.handleOptionClick(e, t) }, onMouseDown: i.handleOptionMouseDown, onMouseEnter: function (e) { return i.handleOptionMouseEnter(e, t) }, ref: function (e) { i.elementReferences[t] = e }, role: 'option', tabIndex: '-1', 'aria-posinset': t + 1, 'aria-setsize': x.length }) }), P && (0, $.createElement)('li', { className: q + ' ' + q + '--no-results' }, p())), (0, $.createElement)('span', { id: Q, style: { display: 'none' } }, v())) }, e }($.Component)); (t.default = a).defaultProps = { autoselect: !1, cssNamespace: 'autocomplete', defaultValue: '', displayMenu: 'inline', minLength: 0, name: 'input-autocomplete', placeholder: '', onConfirm: function () {}, confirmOnBlur: !0, showNoOptionsFound: !0, showAllValues: !1, required: !1, tNoResults: function () { return 'No results found' }, tAssistiveHint: function () { return 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.' }, dropdownArrow: r.default } }, function (e, t, r) { var o = r(9); var i = r(53); var u = r(28); var a = r(26)('IE_PROTO'); var s = function () {}; var l = 'prototype'; var c = function () { var e; var t = r(15)('iframe'); var n = u.length; for (t.style.display = 'none', r(54).appendChild(t), t.src = 'javascript:', (e = t.contentWindow.document).open(), e.write('<script>document.F=Object<\/script>'), e.close(), c = e.F; n--;) delete c[l][u[n]]; return c() }; e.exports = Object.create || function (e, t) { var n; return e !== null ? (s[l] = o(e), n = new s(), s[l] = null, n[a] = e) : n = c(), t === undefined ? n : i(n, t) } }, function (e, t, n) { var u = n(8); var a = n(9); var s = n(20); e.exports = n(3) ? Object.defineProperties : function (e, t) { a(e); for (var n, r = s(t), o = r.length, i = 0; i < o;)u.f(e, n = r[i++], t[n]); return e } }, function (e, t, n) { var r = n(1).document; e.exports = r && r.documentElement }, function (e, t, n) { var r = n(0); r(r.P, 'Function', { bind: n(56) }) }, function (e, t, n) { 'use strict'; var i = n(19); var u = n(2); var a = n(57); var s = [].slice; var l = {}; e.exports = Function.bind || function (t) { var n = i(this); var r = s.call(arguments, 1); var o = function () { var e = r.concat(s.call(arguments)); return this instanceof o ? (function (e, t, n) { if (!(t in l)) { for (var r = [], o = 0; o < t; o++)r[o] = 'a[' + o + ']'; l[t] = Function('F,a', 'return new F(' + r.join(',') + ')') } return l[t](e, n) }(n, e.length, e)) : a(n, e, t) }; return u(n.prototype) && (o.prototype = n.prototype), o } }, function (e, t) { e.exports = function (e, t, n) { var r = n === undefined; switch (t.length) { case 0:return r ? e() : e.call(n); case 1:return r ? e(t[0]) : e.call(n, t[0]); case 2:return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]); case 3:return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]); case 4:return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) } }, function (e, t, n) { n(59)('match', 1, function (r, o, e) { return [function (e) { 'use strict'; var t = r(this); var n = e == undefined ? undefined : e[o]; return n !== undefined ? n.call(e, t) : new RegExp(e)[o](String(t)) }, e] }) }, function (e, t, n) { 'use strict'; var a = n(7); var s = n(16); var l = n(4); var c = n(12); var p = n(34); e.exports = function (t, e, n) { var r = p(t); var o = n(c, r, ''[t]); var i = o[0]; var u = o[1]; l(function () { var e = {}; return e[r] = function () { return 7 }, ''[t](e) != 7 }) && (s(String.prototype, t, i), a(RegExp.prototype, r, e == 2 ? function (e, t) { return u.call(e, this, t) } : function (e) { return u.call(e, this) })) } }, function (e, t, n) { 'use strict'; t.__esModule = !0, t.default = void 0, n(36); var _ = n(5); var r = function r (o, i, u) { var a; return function () { var e = this; var t = arguments; var n = function n () { a = null, u || o.apply(e, t) }; var r = u && !a; clearTimeout(a), a = setTimeout(n, i), r && o.apply(e, t) } }; var o = (function (o) { function e () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; return (e = o.call.apply(o, [this].concat(n)) || this).state = { bump: !1, debounced: !1 }, e }(function n (e, t) { e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t })(e, o); var t = e.prototype; return t.componentWillMount = function () { var e = this; this.debounceStatusUpdate = r(function () { if (!e.state.debounced) { var t = !e.props.isInFocus || e.props.validChoiceMade; e.setState(function (e) { return { bump: !e.bump, debounced: !0, silenced: t } }) } }, 1400) }, t.componentWillReceiveProps = function (e) { e.queryLength; this.setState({ debounced: !1 }) }, t.render = function () { var e = this.props; var t = e.id; var n = e.length; var r = e.queryLength; var o = e.minQueryLength; var i = e.selectedOption; var u = e.selectedOptionIndex; var a = e.tQueryTooShort; var s = e.tNoResults; var l = e.tSelectedOption; var c = e.tResults; var p = this.state; var f = p.bump; var d = p.debounced; var h = p.silenced; var m = r < o; var v = n === 0; var y = i ? l(i, n, u) : ''; var g = null; return g = m ? a(o) : v ? s() : c(n, y), this.debounceStatusUpdate(), (0, _.createElement)('div', { style: { border: '0', clip: 'rect(0 0 0 0)', height: '1px', marginBottom: '-1px', marginRight: '-1px', overflow: 'hidden', padding: '0', position: 'absolute', whiteSpace: 'nowrap', width: '1px' } }, (0, _.createElement)('div', { id: t + '__status--A', role: 'status', 'aria-atomic': 'true', 'aria-live': 'polite' }, !h && d && f ? g : ''), (0, _.createElement)('div', { id: t + '__status--B', role: 'status', 'aria-atomic': 'true', 'aria-live': 'polite' }, h || !d || f ? '' : g)) }, e }(_.Component)); (t.default = o).defaultProps = { tQueryTooShort: function (e) { return 'Type in ' + e + ' or more characters for results' }, tNoResults: function () { return 'No search results' }, tSelectedOption: function (e, t, n) { return e + ' ' + (n + 1) + ' of ' + t + ' is highlighted' }, tResults: function (e, t) { return e + ' ' + (e === 1 ? 'result' : 'results') + ' ' + (e === 1 ? 'is' : 'are') + ' available. ' + t } } }, function (e, t, n) { 'use strict'; t.__esModule = !0, t.default = void 0; var r = n(5); var o = function i (e) { var t = e.className; return (0, r.createElement)('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', className: t, focusable: 'false' }, (0, r.createElement)('g', { stroke: 'none', fill: 'none', 'fill-rule': 'evenodd' }, (0, r.createElement)('polygon', { fill: '#000000', points: '0 0 22 0 11 17' }))) }; t.default = o }])).default })
}, {}] }, {}, [1])
