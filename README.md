![Cover Image](/renderer/public/github/cover.png)

# HQLauncher

## Version 0.2 Alpha

[![Discord](https://img.shields.io/discord/1043037046631043163?label=discord&color=%235865f2)](https://discord.gg/MeQwqsCHUE)
![GitHub Repo stars](https://img.shields.io/github/stars/DuckyHQ0/HQLauncher)
![GitHub contributors](https://img.shields.io/github/contributors/DuckyHQ0/HQLauncher)
![GitHub License](https://img.shields.io/github/license/DuckyHQ0/HQLauncher)

## 📗 About

HQLauncher is a Minecraft launcher, with modern UI.
It aims to include many useful features such as:

- Instance management
- Creation of vanilla, and modded instances
- Download mod-packs & mods straight from the launcher
- Easy to use and secure account manager, with easy skin management
- Mod, shader-pack and resource-pack management inside instances
- And more!

![](/renderer/public/github/screenshot.png)

Please report any bugs inside the issues tab under this repository, or inside my [Discord](https://discord.gg/MeQwqsCHUE). I'm also open to suggestions!

## 🏃‍♂️ How to Run (dev)

- Install node.js
- Download the source code (Git clone, GitHub desktop, or download zip)
- Open the directory, and run:

  ```bash
  npm install

  npm run dev
  ```

## 📁 Project Info

### Technologies

Big thanks to the author and contributors of [MSMC](https://github.com/Hanro50/MSMC) and [GMLL](https://github.com/Hanro50/GMLL), for making authentication and launcher stuff so easy. <br />
This project is built with Nextron (next.js and electron) <br />
It uses [MorphUI](https://github.com/DuckyHQ0/morphui) (also a duckyhq project) for the design. MorphUI uses Radix Primitives for components, and this entire project uses Tailwind CSS.

### Directory Structure (simplified)

The main process's files are inside the main directory, same with the renderer process. The main process is like the back-end of the app, for electron, system, and launcher stuff. The renderer is what you see, so it's the front-end. These are the only two folders you should be mainly working in. <br />
When you init GMLL, a `.minecraft` folder will be created containing all the important launcher stuff.

```
├── .minecraft
├── main/
│   ├── launcher/
│   │   ├── auth.ts - Authentication
│   │   └── launcher.ts - Minecraft launching stuff
│   ├── background.ts - Main Electron file
│   └── preload.ts - IPC stuff
└── renderer/
    ├── components/ - MorphUI components, and specific HQL components (including layouts)
    ├── pages/ - All the front-end pages
    └── public/ - Assets
```

## ⬆️ Contributing & License

Feel free to contribute to the development of this project. Any help is appreciated!

All code and media in this repository is licensed under the [GNU General Public License v3.0](/LICENSE.txt).

## 🎨 Brand

Brand assets are available [here](https://github.com/DuckyHQ0/hqlauncher/tree/main/renderer/public/brand).

This project can be named by `HQLauncher` or `HQL`.

Do not claim HQLauncher to be yours.

Do not alter the logo or use it for your own projects.
