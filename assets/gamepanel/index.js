System.register("chunks:///_virtual/gamepanel", [], function () {
  return {
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/gamepanel', 'chunks:///_virtual/gamepanel'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});