exports.seed = function (knex, Promise) {
  return knex('members').del()
    .then(function () {
      return Promise.all([
        knex('members').insert({MembershipId: 101, name: 'Rebecca Hailstone', email: 'beverley@asteriskdesign.co.nz', phone: '012 345 6789', address: '1 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:102, name: 'Sarah Grundy', email: 'beverley.walter@lycos.com', phone: '012 345 6788', address: '2 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:103, name: 'Corry Walter', email: 'corry.walter@xtra.co.nz', phone: '012 345 6787', address: '3 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:104, name: 'Mel Clancy', email: 'absolutedelirium@ymail.com', phone: '012 345 6786', address: '4 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:105, name: 'Bev Walter', email: 'bevwaltersemail@gmail.com', phone: '012 345 6785', address: '5 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:106, name: 'Kaye Sowerby', email: 'flying.fox@example.org', phone: '012 345 6784', address: '6 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:107, name: 'Rachael Orme', email: 'gila.monster@example.org', phone: '012 345 6783', address: '7 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:108, name: 'Madeline Louden', email: 'heron@example.org', phone: '012 345 6782', address: '8 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:109, name: 'Naomi Bruce', email: 'impala@example.org', phone: '012 345 6781', address: '9 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:110, name: 'Jennifer Bull', email: 'jerboa@example.org', phone: '012 345 6779', address: '10 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:111, name: 'Julia Whitbread', email: 'kinkajou@example.org', phone: '012 345 678', address: '11 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:112, name: 'Aimee Deacon', email: 'lemur@example.org', phone: '012 345 6777', address: '12 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:113, name: 'Vicki Whitchurch-Bennett', email: 'mongoose@example.org', phone: '012 345 6776', address: '13 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:114, name: 'Wendy Dempster', email: 'nyala@example.org', phone: '012 345 6775', address: '14 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:115, name: 'Carla Wolff', email: 'ocelot@example.org', phone: '012 345 6774', address: '15 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:116, name: 'Debbie Royle', email: 'panda@example.org', phone: '012 345 6773', address: '16 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:117, name: 'Donna Edwards', email: 'quokka@example.org', phone: '012 345 6772', address: '17 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:118, name: 'Di Baker', email: 'rail@example.org', phone: '012 345 67871', address: '18 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:119, name: 'Debbie Wynn-Foster', email: 'sloth@example.org', phone: '012 345 67880', address: '19 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'}),
        knex('members').insert({MembershipId:120, name: 'Bex Hemmingson', email: 'terrapin@example.org', phone: '012 345 6770', address: '20 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1'})
      ]);
    });
};
