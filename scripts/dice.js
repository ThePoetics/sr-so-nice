Hooks.once('diceSoNiceReady', (dice3d) => {
        dice3d.addSystem({id: "SRSN", name: "Shadowrun so Nice"}, preferred);
        dice3d.addDicePreset({
                type: "d6",
                labels: ["modules/sr-so-nice/images/glitch.png","","","","modules/sr-so-nice/images/hit.png","modules/sr-so-nice/images/hit.png"],
                system: "SRSN"
        });
  
        dice3d.addColorset({
                name: 'SRSN',
                description: 'Shadowrun so Nice',
                category: "Shadowrun",
                material: "metal",
                background: "#5C5D5B",
                system: "SRSN"
        });
  
});
