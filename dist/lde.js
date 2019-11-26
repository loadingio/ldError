// Generated by LiveScript 1.3.1
(function(){
  var idmap, ldError;
  idmap = {
    0: "unknown error",
    999: "canceled",
    1000: "user not login",
    1001: "suspicious user",
    1002: "unknown error",
    1003: "image process failed",
    1004: "quota exceeded",
    1005: "csrftoken mismatch",
    1006: "timeout",
    1007: "server down",
    1008: "unable to parse user data"
  };
  ldError = function(opt, id){
    opt == null && (opt = "");
    id == null && (id = 0);
    if (typeof opt === 'string') {
      this.message = opt;
      this.id = id;
    } else if (opt instanceof Error) {
      (this.stack = opt.stack, this.message = opt.message, this).id = id || 0;
    } else if (typeof opt === 'object') {
      import$(this, opt).id = id || 0;
    } else if (typeof opt === 'number') {
      this.id = opt;
    }
    if (!(this.message != null)) {
      this.message = idmap[this.id || 0];
    }
    this.stack = new Error().stack;
    return this;
  };
  ldError.prototype = import$(Object.create(Error.prototype), {
    name: 'ldError',
    toString: function(opt){
      var obj;
      opt == null && (opt = {});
      obj = this.toObject();
      if (opt.stack != null && !opt.stack) {
        delete obj.stack;
      }
      return JSON.stringify(obj);
    },
    toObject: function(){
      var ref$;
      return ref$ = {
        name: this.name
      }, ref$.id = this.id, ref$.message = this.message, ref$.stack = this.stack, ref$;
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = ldError;
  }
  if (typeof window != 'undefined' && window !== null) {
    return window.ldError = ldError;
  }
})();
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
