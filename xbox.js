

//Xobx controller support
window.addEventListener('gamepadconnected', event => {
    console.log("Gamepad Coneected")
    console.log(event.gamepad)

})

window.addEventListener('gamepadddisconnected', event => {
    console.log('Gamepad disconnected:')
    console.log(event.gamepad)
})


// let xButtona = window.addEventListener('gamepadabuttondown' () => {
    //     console.log
    // })
    
    function update() {
        window.requestAnimationFrame(update)
       
        
}

const gamepadDisplay = document.getElementById('gamepad-display')

function updateXbox() {
    const gamepads = navigator.getGamepads()
    if (gamepads[0])  {
        const gamepadState = {
            id: gamepads[0].id, 
            
            axes:  [
                gamepads[0].axes[0].toFixed(2),
                gamepads[0].axes[1].toFixed(2),
                gamepads[0].axes[2].toFixed(2),
                gamepads[0].axes[3].toFixed(2),
            ],
            buttons: [
                { button_0: gamepads[0].bottons[0].pressed },
                { button_1: gamepads[0].bottons[1].pressed },
                { button_2: gamepads[0].bottons[2].pressed },
                { button_3: gamepads[0].bottons[3].pressed },
                { button_4: gamepads[0].bottons[4].pressed },
                { button_5: gamepads[0].bottons[5].pressed },
                { button_6: gamepads[0].bottons[6].pressed },
                { button_7: gamepads[0].bottons[7].pressed },
                { button_8: gamepads[0].bottons[8].pressed },
                { button_9: gamepads[0].bottons[9].pressed },
                { button_10: gamepads[0].bottons[10].pressed },
                { button_11: gamepads[0].bottons[11].pressed },
                { button_12: gamepads[0].bottons[12].pressed },
                { button_13: gamepads[0].bottons[13].pressed },
                { button_14: gamepads[0].bottons[14].pressed },
                { button_15: gamepads[0].bottons[15].pressed },
            ],
            
        }
        gamepadDisplay.textContent = JSON.stringify(gamepadState, null, 2)
    }
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)




// // // // let controller = {};
// // // let buttonsPressed = [];
// // // function gamepadHandler(e) {
// // //   controller = e.gamepad
// // //   output.textContent = `Gamepad: ${controller.id}`
// // // }

// // // function gamepadUpdateHandler() {
// // //     buttonsPressed = [];
// // //     if(controller.buttons) {
// // //         for(var b=0; b<controller.buttons.length; b++) {
// //             if(controller.buttons[b].pressed) {
// //                 buttonsPressed.push(b);
// //             }
// //         }
//     }
// }