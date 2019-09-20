(->
  code = do
    0: "unknown error"
    99: "canceled" # action canceled.
    100: "user not login"
    # 400 ~ 599: preserved for http code

  ldError = (opt="", id = 0) ->
    if typeof(opt) == \string => @ <<< {message: opt, id}
    else if typeof(opt) == \object => @ <<< {id: 0} <<< opt
    else if typeof(opt) == \number => @id = opt
    if !(@message?) => @message = code[@id or 0]
    @stack = (new Error!).stack
    @

  ldError.prototype = Object.create(Error.prototype) <<< do
    name: \ldError
  if module? => module.exports = ldError
  if window => window.ldError = ldError
)!
