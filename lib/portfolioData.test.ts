// Runtime validation coverage for the portfolio data contract.
import assert from "node:assert/strict";
import {describe, it} from "node:test";
// @ts-expect-error Node's type-stripping runtime requires explicit TypeScript extensions.
import {aboutSection, coreCompetencies, education, experience, heroSection, profile, projects} from "./portfolioData.ts";

describe("portfolio data", () => {
  it("exposes the sections required by the page", () => {
    assert.equal(typeof heroSection.greeting, "string");
    assert.equal(typeof profile.name, "string");
    assert.ok(aboutSection.paragraphs.length > 0);
    assert.ok(coreCompetencies.length > 0);
    assert.ok(experience.length > 0);
    assert.ok(education.length > 0);
    assert.ok(projects.length > 0);
  });

  it("keeps project links valid for rendered cards", () => {
    for (const project of projects) {
      assert.equal(typeof project.title, "string");
      assert.equal(typeof project.description, "string");
      assert.match(project.link, /^https?:\/\//);
    }
  });
});
