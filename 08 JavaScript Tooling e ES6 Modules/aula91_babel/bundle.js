"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// compatibilidade dos codigos com navegadores mais antigo
// site - can I use - ve o que podemos usar em cada navegador
// ex: const nao é suportado do 6 ao 10 do Internet explorer
// como fazer para resolver isso? - Podemos usar o babel (babeljs.io)
// como se fosse um tradutor de codigo 
// vamos usar o babel - para instalar é (terminal)
/*
npm init -y
npm install --save-dev @babel/cli @babel/preset-env @babel/core (colocado no dev dependencies)
*/
var Pessoa = /*#__PURE__*/function () {
  function Pessoa(name, age) {
    _classCallCheck(this, Pessoa);
    this.name = name;
    this.age = age;
  }
  _createClass(Pessoa, [{
    key: "name",
    get: function get() {
      return this.name;
    },
    set: function set(valor) {
      this.name = valor;
    }
  }, {
    key: "anoNascimento",
    value: function anoNascimento() {
      return 2024 - this.age;
    }
  }]);
  return Pessoa;
}(); // para converter para script mais moderno
// npx babel index.js -o bundle.js --presets=@babel/env
// adicionei ao packge.json     "babel": "babel ./index.js -o ./bundle.js --presets=@babel/env -w"
// assim ele recompila automaticamente o bundle sempre que alterar o index.js
// para isso preciso ainda de no terminal fazer: npm run babel
