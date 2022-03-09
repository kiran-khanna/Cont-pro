/**
 * RMC
 * RMC Construction is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/RMC-html
 *
 * @encoding        UTF-8
 * @version         1.0.1
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
'use strict';

import Swal from 'sweetalert2';

function drawNotification(settings, alertText) {
    Swal.fire({
        showConfirmButton: false,
        html: `
            <p class="main">${alertText}</p>`,
        ...settings
    })
}

export default drawNotification;