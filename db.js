
module.exports = {
  getMember: getMember,
  getMembers: getMembers
}

function getMembers (connection) {
  return connection('members').select()
}

function getMember (id, connection) {
  return connection('member').where('MembershipId', id)
}


/*function getAllItems (connection) {
return connection('posts').select()
  .join('users','users.id','=','users_id')

}

function createPost(title, posts, connection) {
 return connection('posts')
 .insert({
   title: title,
   posts: posts
 })
 }
 */
