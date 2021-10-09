const { useFlameThrower } = require("./flamethrower");

// Which objective blocks the opening of a barrier?
const barrierPrereqMap = {
  "09_make_pr": ["partyShortcutBarriers", "forestShortcutBarriers"],
};

const doesBarrierHavePrereq = (barrierKey) =>
  Object.values(barrierPrereqMap).some((bariersWithPrereqs) =>
    bariersWithPrereqs.some(
      (barrierWithPrereq) => barrierWithPrereq === barrierKey
    )
  );

async function updateBrushState(event, world, worldState) {
  if (event.name === "playerDidInteract" && event.target.type === "brush") {
    // TODO: Temp disable for testing
    if (!worldState.flameUnlocked) {
      world.showNotification(
        `Hopefully the <em>The Flame of Open Source</em> can help me burn through this brush.`
      );
      return;
    }

    await useFlameThrower(world, event.target.key);

    world.destroyEntities(event.target.key);
    world.destroyEntities(`${event.target.key}_flame`);
  }
}

function renderBrush(world, worldState) {}

module.exports = { renderBrush, updateBrushState };
