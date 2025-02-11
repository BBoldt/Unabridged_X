// kubejs/client_scripts/hide_jei_items.js

JEIEvents.hideItems(event => {
    // Hide all items with the tag 'forge:ores'
    event.hide(Ingredient.of('#forge:ores'));

    // Hide all EnderIO filled soul vials and broken spawners
    event.hide('enderio:filled_soul_vial');
    event.hide('enderio:broken_spawner');

    // Hide all Mekanism creative tanks
    event.hide('mekanism:creative_fluid_tank');
    event.hide('mekanism:creative_chemical_tank');

    // Hide all trophies from Obtrophies
    event.hide('obtrophies:trophy');

    // Hide everything from Simple Hats
    event.hide('simplehats');
});
