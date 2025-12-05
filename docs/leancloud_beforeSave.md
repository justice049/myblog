# LeanCloud beforeSave for `Comment` (populate QQAvatar)

This document shows how to deploy a Cloud Code `beforeSave` trigger so new `Comment` objects get a `QQAvatar` field when the commenter used a QQ email (e.g. `123456@qq.com`).

Files added to this repo:
- `cloud/main.js` — the Cloud Code trigger implementation.

Two deployment options:

1) Deploy via LeanCloud 控制台 (quick)

  - Open LeanCloud 控制台 and select your app.
  - Go to **Cloud Engine / Cloud Code** (云引擎) or the place for editing server-side code.
  - Create or edit `main.js` and paste the contents of `cloud/main.js` from this repo.
  - Save and publish/deploy.

2) Deploy via `lean` CLI (git-style deploy)

  - Install: `npm i -g leancloud-storage lean-cli` (or see LeanCloud docs).
  - Login and init: `lean login` then `lean init` in your repo if needed.
  - Put `cloud/main.js` into your Cloud Code folder (already in this repo under `cloud/`).
  - Run: `lean deploy` (follow LeanCloud CLI instructions).

Verification (after deploy):

1. Post a comment on your site using a QQ email address (e.g. `3440501841@qq.com`).

2. Query the latest comment via curl (you already used this example):

```bash
curl -i "https://tv1tqedz.lc-cn-n1-shared.com/1.1/classes/Comment?limit=1&order=-createdAt" \
  -H "X-LC-Id: Tv1tQeDzMHFGtyxLwEIKzU8N-gzGzoHsz" \
  -H "X-LC-Key: EpD8w2JukK76zPmKRM0Va8fC"
```

3. The returned JSON `results[0]` should include a non-empty `QQAvatar` field like:

```
"QQAvatar": "https://q1.qlogo.cn/g?b=qq&nk=3440501841&s=100"
```

Notes and fallbacks:
- This code only populates `QQAvatar` for QQ emails. If you want to support other providers, extend the trigger.
- We intentionally set `QQAvatar` on the server so clients don't rely on front-end heuristics or Valine internals.
- If you cannot deploy Cloud Code, the repo already contains frontend fallbacks (cravatar + qlogo logic) to improve display.
