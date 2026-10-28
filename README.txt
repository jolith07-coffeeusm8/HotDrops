HDPWA - Hot Drops as an installable web app (PWA)   build 20261028-d3f8ff98
====================================================================
This is an EXTRA package. Your normal ASHD_HotDrops HTML file keeps working exactly as before.

HOSTING
- Upload the whole folder contents (index.html, manifest.webmanifest, sw.js, icons/) to any static web host.
- HTTPS is REQUIRED (service workers and Install only work on https:// or http://localhost).
- Works in a subfolder, e.g. GitHub Pages: https://<you>.github.io/<repo>/  (all paths are relative).
- Opening index.html straight from disk (file://) works as a normal page but will NOT install or work offline.

INSTALL
- Android (Chrome / Samsung Internet): open the URL, then menu > "Install app" or "Add to Home screen".
- PC (Chrome / Edge): open the URL, click the install icon in the address bar (or menu > Apps > Install).
- After the first load it works offline. When a new build is uploaded, the app updates itself the next
  time it is opened online (it reloads once when the new version takes over).

SAVES ARE SEPARATE
- Browser saves belong to each web address (origin). The installed app does NOT see the saves in your
  local HTML file, and different hosts have different saves.
- To move your campaign: in the OLD HTML file use MENU > Export (Aces + Hot Spots), then in the
  PWA use MENU > Import with that file. Export regularly as a backup.
