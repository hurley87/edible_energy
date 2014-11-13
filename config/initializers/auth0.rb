Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :auth0,
    'snHqvok95wKwMgaZmC4TfsHnjNbPUzk8',
    'FPqGhC6HMRWFKlXAgocK58rqwRsEaH7YY8Xf3IKRVqRRw7JWMnok0GryU2LRqGEE',
    'dhurls99.auth0.com',
    callback_path: "/auth/auth0/callback"
  )
end