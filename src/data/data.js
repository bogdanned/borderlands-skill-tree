import { SkillType } from "beautiful-skill-tree";
import htmlIcon from '../skills/html.png';
import cssIcon from '../skills/css.png';
import javascriptIcon from '../skills/flex.png';
import reactIcon from '../skills/javascript.png';
import vueIcon from '../skills/promises.png';
import angularIcon from '../skills/event_loop.png';
import reduxIcon from '../skills/scope.png';
import graphqlIcon from '../skills/html.png';
import typescriptIcon from '../skills/html.png';
import webpackIcon from '../skills/html.png';
import babelIcon from '../skills/html.png';
import tailwindIcon from '../skills/html.png';
import bootstrapIcon from '../skills/html.png';
import sassIcon from '../skills/html.png';
import jestIcon from '../skills/html.png';
import cypressIcon from '../skills/html.png';

export const motion: SkillType = [
  {
    id: "html",
    icon: htmlIcon,
    title: "HTML",
    nodeState: 'selected',
    tooltipDescription: "Markup language for creating web pages.",
    children: [
      {
        id: "css",
        icon: cssIcon,
        title: "CSS",
        tooltipDescription: "Style sheet language for describing the presentation of a document.",
        children: [
          {
            id: "sass",
            icon: sassIcon,
            title: "Sass",
            tooltipDescription: "CSS preprocessor that adds power and elegance to the basic language.",
            children: [
              {
                id: "tailwind",
                icon: tailwindIcon,
                title: "Tailwind CSS",
                tooltipDescription: "Utility-first CSS framework for rapid UI development.",
                children: []
              },
              {
                id: "bootstrap",
                icon: bootstrapIcon,
                title: "Bootstrap",
                tooltipDescription: "Front-end framework for developing responsive, mobile-first websites.",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "javascript",
    icon: javascriptIcon,
    title: "JavaScript",
    tooltipDescription: "Programming language that enables interactive web pages.",
    children: [
      {
        id: "react",
        icon: reactIcon,
        title: "React",
        tooltipDescription: "JavaScript library for building user interfaces.",
        children: [
          {
            id: "redux",
            icon: reduxIcon,
            title: "Redux",
            tooltipDescription: "State management library for JavaScript apps.",
            children: [
              {
                id: "graphql",
                icon: graphqlIcon,
                title: "GraphQL",
                tooltipDescription: "Query language for your API.",
                children: []
              }
            ]
          },
          {
            id: "typescript",
            icon: typescriptIcon,
            title: "TypeScript",
            tooltipDescription: "Typed superset of JavaScript that compiles to plain JavaScript.",
            children: []
          }
        ]
      },
      {
        id: "vue",
        icon: vueIcon,
        title: "Vue.js",
        tooltipDescription: "JavaScript framework for building user interfaces.",
        children: []
      },
      {
        id: "angular",
        icon: angularIcon,
        title: "Angular",
        tooltipDescription: "Platform and framework for building single-page client applications.",
        children: []
      }
    ]
  },
  {
    id: "tooling",
    icon: webpackIcon,
    title: "Tooling",
    tooltipDescription: "Tools and libraries for frontend development.",
    children: [
      {
        id: "webpack",
        icon: webpackIcon,
        title: "Webpack",
        tooltipDescription: "Module bundler for JavaScript applications.",
        children: [
          {
            id: "babel",
            icon: babelIcon,
            title: "Babel",
            tooltipDescription: "JavaScript compiler that lets you use next-generation JavaScript.",
            children: []
          }
        ]
      },
      {
        id: "testing",
        icon: jestIcon,
        title: "Testing",
        tooltipDescription: "Libraries and frameworks for testing frontend applications.",
        children: [
          {
            id: "jest",
            icon: jestIcon,
            title: "Jest",
            tooltipDescription: "JavaScript testing framework.",
            children: []
          },
          {
            id: "cypress",
            icon: cypressIcon,
            title: "Cypress",
            tooltipDescription: "JavaScript end-to-end testing framework.",
            children: []
          }
        ]
      }
    ]
  }
];
