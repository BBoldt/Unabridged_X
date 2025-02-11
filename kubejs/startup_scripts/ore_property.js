GTCEuStartupEvents.registry('gtceu:material', event => {

    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');

        // Osmium Ore
        GTMaterials.Osmium.setProperty(PropertyKey.ORE, new $OreProperty());

        // Zinc Ore
        GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty());

        // Uranium Ore
        (GTMaterials.get('uranium')).setProperty(PropertyKey.ORE, new $OreProperty());

        // Ice Ore
        (GTMaterials.get('ice')).setProperty(PropertyKey.ORE, new $OreProperty());

        // Bone Ore hahahahaha
        (GTMaterials.get('bone')).setProperty(PropertyKey.ORE, new $OreProperty());

    });