// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const usersApiBase = "http://api.trustdemocracy.dev/v1/users";
const proposalsApiBase = "http://api.trustdemocracy.dev/v1/proposals";
const socialApiBase = "http://api.trustdemocracy.dev/v1/social";

export const environment = {
  production: false,
  usersApi: {
    getToken: usersApiBase + "/token",
    refreshToken: usersApiBase + "/token/refresh",

    createUser: usersApiBase + "/users",
    findUser: usersApiBase + "/users/:userId",
    updateUser: usersApiBase + "/users/:userId",
    deleteUser: usersApiBase + "/users/:userId"
  },
  proposalsApi: {
    createProposal: proposalsApiBase + "/proposals",
    getProposal: proposalsApiBase + "/proposals/:proposalId",
    deleteProposal: proposalsApiBase + "/proposals/:proposalId",
    publishProposal: proposalsApiBase + "/proposals/:proposalId/publish",
    unpublishProposal: proposalsApiBase + "/proposals/:proposalId/unpublish",

    createComment: proposalsApiBase + "/proposals/:proposalId/comments",
    getComments: proposalsApiBase + "/proposals/:proposalId/comments",
    deleteComment: proposalsApiBase + "/proposals/:proposalId/comments/:commentId",
    voteComment: proposalsApiBase + "/proposals/:proposalId/comments/:commentId",
  },
  socialApi: {
    getEvents: socialApiBase + "/events",
    getEventsByUser: socialApiBase + "/events/:userId",

    followUser: socialApiBase + "/follow",
    unFollow: socialApiBase + "/follow",
    acceptFollow: socialApiBase + "/follow/accept",
    cancelFollow: socialApiBase + "/follow/cancel",
    getFollowRequests: socialApiBase + "/follow/requests",

    trustUser: socialApiBase + "/trust",
    unTrust: socialApiBase + "/trust",
    acceptTrust: socialApiBase + "/trust/accept",
    cancelTrust: socialApiBase + "/trust/cancel",
    getTrustRequests: socialApiBase + "/trust/requests"
  }
};
