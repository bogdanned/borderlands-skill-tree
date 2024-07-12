import React from "react";
import logo from "./logo.png";
import "./App.css";
import { SkillProvider, SkillTreeGroup, SkillTree } from "beautiful-skill-tree";
import { motion, harmony, cataclysm } from './data/data';
import theme from './data/theme';

function handleSave(
  storage,
  treeId,
  skills
) {
  console.log(treeId, skills)
  return storage.setItem(`skills-${treeId}`, JSON.stringify(skills));
}

// the state of the skill tree, as per my custom implementation
const savedData = {
  'ward': {
    optional: false,
    nodeState: 'selected',
  },
  'suspension': {
    optional: false,
    nodeState: 'selected',
  },
  'converge': {
    optional: true,
    nodeState: 'selected'
  }
};

function App() {
  return (
    <div className="App">

      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {() => {
            return (
              <React.Fragment>
                <SkillTree title="Frontend Mastery" treeId="frontend-mastery" data={motion} handleSave={handleSave} savedData={savedData}/>
              </React.Fragment>
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
