async function updateFlameState(event, world, worldState) {}

function renderFlames(world, worldState) {
  if (worldState.flameUnlocked) {
    world.showEntities("flameOpenSource");
  }
}

module.exports = { renderFlames, updateFlameState };
