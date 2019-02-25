
const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  // Helper function that processes a job to match Gatsby's node structure
  const processJob = job => {
    const nodeId = createNodeId(`hrmanager-${job.Id}`)
    const nodeContent = JSON.stringify(job)
    const nodeData = Object.assign({}, job, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `HRmanagerJob`,
        content: nodeContent,
        contentDigest: createContentDigest(job),
      },
    })

    return nodeData
  }

  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)

  // Join apiOptions with the HRmanager API URL
  const apiUrl = `https://recruiter-api.hr-manager.net/jobportal.svc/${configOptions.customerAlias}/positionlist/json/`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'Items')
        if(data.Items.length>0){
          data.Items.forEach(job => {
            // Process the job data to match the structure of a Gatsby node
            const nodeData = processJob(job)
            // Use Gatsby's createNode helper to create a node from the node data
            createNode(nodeData)
            
          })
        }else{
          //Needed to have one dummy node available so the graphql wont fail
            const emptyNodeData = processJob({
            "LastUpdated": "/Date(1549611757000+0100)/",
            "Id": 007,
            "Name": "dummy",
            "ShortDescription": "",
            "AdvertisementUrl": "",
            "Created":"/Date(1549611757000+0100)/"
          })
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(emptyNodeData)
        }

        
      })
  )
}