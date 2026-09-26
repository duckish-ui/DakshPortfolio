# Daksh Mamnani — Portfolio

A React portfolio with a white and forest-green design, animated type, an interactive Three.js sculpture, and dedicated About, Projects, and project-detail pages. The visual reference is https://www.yathinmrudul.me/; the implementation and content are customized for Daksh.

## Develop

- `npm ci`
- `npm start`
- `npm test -- --watchAll=false`
- `npm run build`

The project retains HashRouter for GitHub Pages compatibility. Relative asset URLs also support static hosting at the root or a subdirectory.

## Edit content

- `src/App.js`: biography, social links, homepage phrases, and project categories.
- `src/data/projects.js`: all 13 project, experience, research, and activity entries, including images and links.
- `src/App.css`: theme, layout, responsive styles.
- `src/components/Sculpture.js`: locally rendered 3D animation. Honors reduced motion and disposes GPU resources on navigation.

Original assets and legacy components remain available, but the application uses the new pages in App.js. No external API keys or backend services are required.

Cards show the title, description, and first four technologies over the project's image. Set `imgUrl` in `src/data/projects.js` to change the image, and optionally set `imagePosition` to adjust its card crop. Detail pages show the full image.
