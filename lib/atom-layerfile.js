const { AutoLanguageClient } = require("atom-languageclient")

class LayerfileClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.layerfile"]
  }
  getLanguageName() {
    return "Layerfile"
  }
  getServerName() {
    return "Layerfile Server"
  }

  getConnectionType () {
    return 'ipc'
  }

  startServerProcess() {
    const startServer = path.join(__dirname, '..', "server", "out", "server.js")
    return super.spawnChildNode([startServer, "--node-ipc"], {
      stdio: [null, null, null, "ipc"],
    })
  }
}

module.exports = new LayerfileClient()
