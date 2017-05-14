
module.exports = {
  getMember: getMember,
  getMembers: getMembers
}

function getMembers (connection) {
  return connection('members').select()
}

function getMember (id, connection) {
  return connection('members').where('MembershipId', id)
}
