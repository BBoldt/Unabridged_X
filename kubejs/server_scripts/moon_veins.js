GTCEuServerEvents.oreVeins(event => {
    // 1) Sapphire + Aluminium
    event.add("ad_astra:moon_sapphire_aluminium", vein => {
        vein.weight(200)
            .clusterSize(30)        // 40-wide band (50–90) => clusterSize=30 => 10-block buffer
            .density(0.40)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(50, 90)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Aluminium).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Aluminium)
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // 2) Cassiterite + Scheelite
    event.add("ad_astra:moon_cassiterite_scheelite", vein => {
        vein.weight(150)
            .clusterSize(40)        // 70-wide band (20–90) => clusterSize=50 => 20-block buffer
            .density(0.40)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(20, 90)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Cassiterite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Scheelite).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Scheelite)
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // 3) Silver + Quartzite
    event.add("ad_astra:moon_platinum_quartzite", vein => {
        vein.weight(150)
            .clusterSize(50)        // 70-wide band (20–90) => clusterSize=50 => 20-block buffer
            .density(0.40)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(20, 90)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Quartzite)
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // 4) Iron + Lead
    event.add("ad_astra:moon_iron_lead", vein => {
        vein.weight(200)
            .clusterSize(50)        // 70-wide band (10–80) => clusterSize=50 => 20-block buffer
            .density(0.40)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(-10, 40)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Iron).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lead)
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // 5) Osmium Surface
    event.add("ad_astra:moon_osmium_surface", vein => {
        vein.weight(170)
            .clusterSize(60)         // 10-wide band (80–90) => clusterSize=5 => difference=5
            .density(0.45)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(80, 110)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('osmium')).size(3, 5))
                .layer(l => l.weight(4).mat(GTMaterials.get('ice')).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('osmium'))
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // Force Vein
    event.add("ad_astra:moon_force", vein => {
        vein.weight(40)
            .clusterSize(40)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(20, 70)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('force')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('ice')).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('force'))
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // Desh Cheese Vein
    event.add("ad_astra:moon_desh_cheese", vein => {
        vein.weight(60)
            .clusterSize(70)
            .density(0.2)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(70, 110)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get('desh')).size(2, 3))
                .layer(l => l.weight(3).mat(GTMaterials.get('cheese')).size(2, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('cheese'))
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });

    // 6) Olivine + Tricalcium Phosphate
    event.add("ad_astra:moon_olivine_tricalcium", vein => {
        vein.weight(120)
            .clusterSize(20)        // 30-wide band (30–60) => clusterSize=20 => 10-block buffer
            .density(0.35)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(30, 60)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Olivine).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('tricalcium_phosphate')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Olivine)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // 7) Asbestos (Solo Vein)
    event.add("ad_astra:moon_asbestos", vein => {
        vein.weight(100)
            .clusterSize(15)        // 25-wide band (10–35) => clusterSize=15 => 10-block buffer
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_moon")
            .heightRangeUniform(10, 35)
            .dimensions("ad_astra:moon");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Asbestos).size(2, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Electrotine).size(3, 5))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Asbestos)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });
});
