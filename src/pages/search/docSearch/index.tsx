import { DocSearch } from '@docsearch/react'

import '@docsearch/css'

export default function DocS() {
  return (
    <div className="App">
      <h1>DocSearch v3 for React</h1>
      <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
      />
    </div>
  )
}
