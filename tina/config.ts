import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "refonte";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "public/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "intro",
            label: "Intro",
            required: true,
            description: 'Introduction. Figure en en-tête des articles.'
            
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image',
            required: true,
            description: 'Image de couverture',
          },
          {
            type: 'image',
            name: 'authorPic',
            label: 'Photo de profil',
            required: true,
            description: 'Photo de profil de l\'auteur',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Nom de l\'auteur',
            required: true,
            description: 'Nom de l\'auteur',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            label: "Date",
            name: "date",
            type: "datetime",
            ui: {
              dateFormat: 'DD-MM-YYYY'
            },
          }
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/public/posts/${document._sys.filename}`,
        },
      },
    ],
  },
});
