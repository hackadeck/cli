'use strict'

class QuerySelectorAllResponse {
  #node = null

  constructor (node) {
    const {
      name,
      version,
      location,
      path,
      realpath,
      resolved,
      isLink,
      isWorkspace,
      pkgid,
    } = node.target

    Object.assign(this, node.target.package)

    this.pkgid = pkgid
    this.location = location
    this.path = path
    this.realpath = realpath
    this.resolved = resolved
    this.isLink = isLink
    this.isWorkspace = isWorkspace
  }
}

module.exports = QuerySelectorAllResponse
