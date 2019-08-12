import { ToKen } from '/models/token.js'

App({
  onLaunch: function(){
    const token = new ToKen()
    token.verify()
  }
})