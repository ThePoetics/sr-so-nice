Hooks.once('diceSoNiceReady', (dice3d) => {
        dice3d.addTexture("gmetal", {
			name: "Gunmetal",
			composite: "source-over",
			source: "modules/sr-so-nice/images/texture.png",
			bump: ""
		});
		
		dice3d.addSystem({id: "SRSN", name: "Shadowrun so Nice"});
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
				texture: 'gmetal',
                background: "#5C5D5B",
                system: "SRSN"
        });
  
});
