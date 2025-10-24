The Netlify deploy errored, with the following guidance provided:

Diagnosis

- The Netlify Angular Runtime plugin failed because the configured publish directory is wrong. The plugin error says the publish directory must be "dist/embaclass/browser" ([error message](#L70)). The resolved config shows Netlify is currently publishing "/opt/build/repo/dist/embaclass" ([resolved publish](#L89)). The plugin fails in its onPreBuild step for that reason ([plugin location](#L80)). The build command being run is "npm ci --legacy-peer-deps && npm run build:netlify" ([build command](#L84)).

Solution

1. Confirm the browser build output exists
   - Run the same build locally (or inspect a CI build artifact):
     - npm ci --legacy-peer-deps
     - npm run build:netlify
   - Verify the folder dist/embaclass/browser is produced. Example:

```bash
npm ci --legacy-peer-deps
npm run build:netlify
ls -la dist/embaclass/browser
```

- If the folder does not exist, adjust your Angular build configuration so the browser output is emitted under dist/embaclass/browser (check angular.json and the build script used by build:netlify).

2. Update Netlify to use the correct publish directory
   - EITHER update netlify.toml in your repo (recommended if you keep config in repo). Change the publish path to dist/embaclass/browser. Example netlify.toml:

```toml
[build]
  command = "npm ci --legacy-peer-deps && npm run build:netlify"
  publish = "dist/embaclass/browser"
```

- OR update the Site settings in the Netlify UI: Site → Site settings → Build & deploy → Continuous Deployment → Build settings → Publish directory, set it to:
  dist/embaclass/browser

3. Re-deploy
   - Commit netlify.toml (if you changed it) and push, or trigger a redeploy in Netlify after changing the UI setting. The plugin should no longer error once Netlify is set to publish dist/embaclass/browser.

Notes

- If your build intentionally outputs a different structure, instead make sure the build produces the browser subfolder the plugin expects (adjust angular.json or the build script). The plugin specifically requires the "browser" subfolder under the package dist dir.

The relevant error logs are:

Line 0: build-image version: 7aa2b696d8640ee8ab8ada4b1f870982d7bd596d (noble)
Line 1: buildbot version: 11482adeb7bc8b39b970c0c529cdaed99bb59394
Line 2: Fetching cached dependencies
Line 3: Failed to fetch cache, continuing with build
Line 4: Starting to prepare the repo for build
Line 5: No cached dependencies found. Cloning fresh repo
Line 6: git clone --filter=blob:none https://github.com/kirestein/embalagem-com-classe
Line 7: Preparing Git Reference refs/heads/main
Line 8: Custom publish path detected. Proceeding with the specified path: 'dist/embaclass'
Line 9: Custom build command detected. Proceeding with the specified command: 'npm ci --legacy-peer-deps && npm run build:netlify'
Line 10: Starting to install dependencies
Line 11: Attempting Node.js version '18' from .nvmrc
Line 12: Downloading and installing node v18.20.8...
Line 13: Downloading https://nodejs.org/dist/v18.20.8/node-v18.20.8-linux-x64.tar.xz...
Line 54: /opt/build/repo/netlify.toml
Line 55: [36m[1m​[22m[39m
Line 56: [36m[1m❯ Context[22m[39m
Line 57: production
Line 58: [36m[1m​[22m[39m
Line 59: [36m[1m❯ Installing plugins[22m[39m
Line 60: - @netlify/angular-runtime@2.4.0
Line 61: [36m[1m​[22m[39m
Line 62: [36m[1m❯ Loading plugins[22m[39m
Line 63: - [36m@netlify/angular-runtime[39m@2.4.0 from Netlify app
Line 64: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 65: [91m[1m​[22m[39m
Line 66: [91m[1mPlugin "@netlify/angular-runtime" failed [22m[39m
Line 67: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 68: ​
Line 69: [31m[1mError message[22m[39m
Line 70: Error: Publish directory is configured incorrectly. Please set it to "dist/embaclass/browser".
Line 71: ​
Line 72: [31m[1mPlugin details[22m[39m
Line 73: Package: @netlify/angular-runtime
Line 74: Version: 2.4.0
Line 75: Repository: git+https://github.com/netlify/angular-runtime.git
Line 76: npm link: https://www.npmjs.com/package/@netlify/angular-runtime
Line 77: Report issues: https://github.com/netlify/angular-runtime/issues
Line 78: ​
Line 79: [31m[1mError location[22m[39m
Line 80: In "onPreBuild" event in "@netlify/angular-runtime" from Netlify app
Line 81: ​
Line 82: [31m[1mResolved config[22m[39m
Line 83: build:
Line 84: command: npm ci --legacy-peer-deps && npm run build:netlify
Line 85: commandOrigin: config
Line 86: environment:
Line 87: - NODE_VERSION
Line 88: - NPM_FLAGS
Line 89: publish: /opt/build/repo/dist/embaclass
Line 90: publishOrigin: config
Line 91: plugins:
Line 92: - inputs: {}
Line 93: origin: ui
Line 94: package: "@netlify/angular-runtime"
Line 95: redirects:
Line 96: - from: /\*
status: 200
to: /index.html
redirectsOrigin: config
Line 97: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 98: Failing build: Failed to build site
Line 99: Finished processing build request in 21.459s
