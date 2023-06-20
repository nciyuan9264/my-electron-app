module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: (arch) => ({
        name: 'electron-fiddle',
        authors: 'Electron Community',
        exe: 'electron-fiddle.exe',
        iconUrl:
          'https://raw.githubusercontent.com/electron/fiddle/0119f0ce697f5ff7dec4fe51f17620c78cfd488b/assets/icons/fiddle.ico',
        noMsi: true,
        setupExe: `electron-fiddle-${version}-win32-${arch}-setup.exe`,
        setupIcon: 'fiddle.png',
      }),
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        name: '123',
        icon: "fiddle.png",
      }
    },
    // {
    //   name: "@electron-forge/maker-deb",
    //   config: {
    //     options: {
    //       icon: './build/icons/1.icns',
    //     },
    //   },
    // },
    // {
    //   name: "@electron-forge/maker-rpm",
    //   config: {
    //     icon: "./build/icons/1.icns",
    //   },
    // },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
