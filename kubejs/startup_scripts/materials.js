GTCEuStartupEvents.registry('gtceu:material', event => {

    // Force Material
    event.create('force')
        .gem()
        .ore(4, 2, true)
        .color(0xFFFF00)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL);

    // Gobber Materials
    event.create('gobber')
        .gem()
        .ore(3, 1, true)
        .color(0x148FFF)
        .secondaryColor(0x18D1F0)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL);

    event.create('gobber_nether')
        .gem()
        .ore(5, 2, true)
        .color(0xCC2F00)
        .secondaryColor(0xF1B332)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL);

    event.create('gobber_end')
        .gem()
        .ore(5, 2, true)
        .color(0x00FFD5)
        .secondaryColor(0xA2F6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL);

    // Ironwood & Steeleaf
    event.create('ironwood')
        .ingot()
        .ore(3, 1, false)
        .color(0x649000)
        .secondaryColor(0x705D57)
        .iconSet(GTMaterialIconSet.METALLIC);

    event.create('steeleaf')
        .ingot()
        .ore(3, 1, false)
        .color(0x76AF85)
        .secondaryColor(0x517642)
        .iconSet(GTMaterialIconSet.METALLIC);

    // Cheese
    event.create('cheese')
        .gem()
        .ore(2, 0, true)
        .color(0xFFD00E)
        .secondaryColor(0xE37B01)
        .oreSmeltInto('ad_astra:cheese')
        .iconSet(GTMaterialIconSet.QUARTZ);

    // Ad Astra Metals
    event.create('desh')
        .ingot()
        .ore(4, 1, false)
        .color(0xA0522D)
        .secondaryColor(0xFFAB66)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);

    event.create('ostrum')
        .ingot()
        .ore(4, 1, false)
        .color(0xA7537C)
        .secondaryColor(0xEA9999)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);

    event.create('calorite')
        .ingot()
        .ore(5, 2, true)
        .color(0xCC0000)
        .secondaryColor(0xC27BA0)
        .iconSet(GTMaterialIconSet.SHINY);

    // Iesnium & Sal Ammoniac
    event.create('iesnium')
        .ingot()
        .ore(3, 2, true)
        .color(0x9FC5E8)
        .secondaryColor(0x0C5884)
        .iconSet(GTMaterialIconSet.METALLIC);

    event.create('sal_ammoniac')
        .gem()
        .ore(6, 3, true)
        .color(0xF7AAFF)
        .secondaryColor(0x0C5884)
        .iconSet(GTMaterialIconSet.QUARTZ);

    // Malum Materials

    event.create('brilliant')
        .gem()
        .ore(5, 3, true)
        .color(0xBDEE8A)
        .secondaryColor(0x53B68F)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL);

    event.create('cthonic_gold')
        .ingot()
        .ore(4, 2, true)
        .color(0xFAEA2E)
        .secondaryColor(0xB26451)
        .iconSet(GTMaterialIconSet.METALLIC);

    event.create('soulstone')
        .gem()
        .ore(4, 2, true)
        .color(0x693E72)
        .secondaryColor(0x693E72)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)

    event.create('blazing_quartz')
        .gem()
        .ore(4, 2, true)
        .color(0xFFB437)
        .secondaryColor(0xCC0000)
        .iconSet(GTMaterialIconSet.QUARTZ)
});
