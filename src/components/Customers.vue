<template>
<div class="w-full px-4 pt-16 pb-16 relative" >
    <div class="absolute top-[-14.2%]" id="onze-klanten"></div>
    <h2 class="text-4xl font-bold text-center">Onze Klanten</h2>
    <p class="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
        We zijn trots op de tevredenheid van onze klanten. Hier zijn enkele van hun ervaringen met onze diensten:
    </p>
    <div
        class="mx-auto container w-full justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <a target="_blank" href="https://calamintha.be">
            <img alt="calamintha logo" class="h-40 mx-auto rounded" src="@/assets/clients-logos/calamintha-logo.png">
        </a>
        <a target="_blank" href="https://vanpoppel.be">
            <img alt="van-poppel logo" class="h-30 mx-auto py-4 px-4 rounded" src="@/assets/clients-logos/van-poppel-logo.png">
        </a>
        <a target="_blank" href="https://www.averydennison.com/en/home.html">
            <img alt="Avery dennison logo" class="h-30 mx-auto py-4 px-4 rounded" src="@/assets/clients-logos/ad-logo.png">
        </a>
        <a target="_blank" href="https://www.lemcool.be/">
            <img alt="lemcool logo" class="h-20 mx-auto py-4 px-4 rounded bg-gradient-to-tr from-slate-800 to-slate-500" src="@/assets/clients-logos/lemcool-logo.svg">
        </a>
        <a target="_blank" href="https://tefunderen.be/en/">
            <img alt="tefunderen logo" class="h-30 mx-auto py-4 px-4 rounded" src="@/assets/clients-logos/tefunderen-logo.png">
        </a>
        <a target="_blank" href="https://www.meesbvba.be">
            <img alt="mees-bvba logo" class="h-20 mx-auto py-4 px-4 rounded" src="@/assets/clients-logos/mees-bvba-logo.svg">
        </a>
        <a target="_blank" href="https://www.van-rooy.be">
            <svg class="h-40 mx-auto py-4 px-4 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 457.43 571.56"><g id="Logo-van-roy"><g><path d="M397.71,373.15c0,13.56-11.01,24.57-24.57,24.57H84.3c-13.59,0-24.59-11.01-24.59-24.57V84.29c0-13.57,11-24.57,24.59-24.57H373.14c13.56,0,24.57,11,24.57,24.57V373.15Z" fill="#1d1d1b"></path><path d="M108.11,335.14l1.38-1.3,125.92-134.25s50.85,54.41,50.55,54.07h-88.71l-12.83,13.43c-1.46,1.85-3.07,5.34,1.23,7.34l160.98,61.63c.12,0,3.75,1.35,7.46,1.65,1.38,.17,5.16,.61,8.07-2.04,1.93-1.76,2.91-4.41,2.91-7.87,0-.07-.14-2.7-.38-3.87-.23-1.17-.9-3.22-.9-3.22,0,0-67.26-187.91-67.35-188.15-.27-1-1.92-5.79-6.31-9.32,0,0-.53-.44-.57-.46-2.58-1.89-5.62-3.02-9.05-3.32l-.79-.04h-98.35c-10.25,.86-15.63,6.64-17.27,11.76,.04-.12-71.33,195.46-71.42,195.83,0,0-2.53,6.29,3.35,9.96,6.37,3.97,12.09-1.84,12.09-1.84Z" fill="#fff"></path><path d="M286.26,132.55c-2.24-3.6-6.22-4.28-8.21-4.28h-96.17c-7.59,.72-9.18,5.09-9.35,5.59l-.09,.23-70.83,194.81c.43-.22,184.64-196.35,184.64-196.35Z" fill="#429446"></path></g><g><path d="M91.08,493.43c-.16,.73-.65,1.3-1.47,1.3h-17.03c-.81,0-1.3-.57-1.55-1.3l-11.24-39.43c-.08-.16-.08-.41-.08-.57,0-.82,.49-1.47,1.47-1.47h9.45c1.06,0,1.55,.24,1.87,1.39l7.66,33.56h2.2l6.92-33.48c.24-1.14,.81-1.47,1.87-1.47h9.53c.98,0,1.63,.65,1.63,1.47,0,.16-.08,.33-.08,.57l-11.16,39.43Z" fill="#1d1d1b"></path><path d="M138.08,494.66c-3.01,.73-6.84,1.14-11.57,1.14-9.45,0-19.88-1.22-19.88-13.93,0-10.43,6.68-11.81,12.63-12.71l14.17-2.28v-2.2c0-2.2-.24-3.58-1.96-4.4-1.14-.57-3.1-.81-5.78-.81-5.29,0-11.49,1.71-13.69,2.2-.16,.08-.41,.16-.57,.16-.49,0-.81-.24-.9-.73l-1.22-5.62c-.08-.16-.08-.24-.08-.41,0-.73,.57-1.06,.98-1.22,1.79-.73,9.45-2.93,18.17-2.93,5.7,0,9.69,.82,12.38,2.36,4.07,2.2,5.21,5.95,5.21,10.51v22.4c0,6.19-2.28,7.25-7.9,8.47Zm-4.56-20.28l-8.72,1.39c-3.1,.49-5.78,1.06-5.78,5.95,0,5.7,4.56,6.19,7.82,6.19,3.01,0,5.62-.57,6.68-.9v-12.63Z" fill="#1d1d1b"></path><path d="M194.05,494.74h-9.94c-.81,0-1.38-.49-1.38-1.22v-28.27c0-4.48-1.79-5.95-5.54-5.95s-8.23,1.06-8.23,1.06v33.15c0,.73-.49,1.22-1.3,1.22h-9.94c-.81,0-1.3-.49-1.3-1.22v-35.52c0-3.1,2.04-4.07,6.76-5.21,4.07-.98,10.51-1.87,15.64-1.87,10.35,0,16.54,2.44,16.54,12.63v29.98c0,.73-.57,1.22-1.3,1.22Z" fill="#1d1d1b"></path><path d="M253.85,460.28c-4.72,0-8.96,.57-10.35,.9v32.34c0,.73-.49,1.22-1.3,1.22h-9.94c-.57,0-1.3-.49-1.3-1.22v-35.6c0-2.36,1.14-3.26,3.67-4.24,2.44-.9,6.35-1.38,9.86-1.87,2.28-.33,5.21-.73,7.9-.81h.73c.9,0,1.14,.08,1.63,.41,.24,.16,.57,.57,.57,1.3v5.95c0,.9-.08,1.63-1.47,1.63Z" fill="#1d1d1b"></path><path d="M280.81,495.8c-18.41,0-20.69-9.86-20.69-22.4s2.28-22.48,20.69-22.48,20.69,9.86,20.69,22.48-2.36,22.4-20.69,22.4Zm0-36.41c-7.58,0-7.9,4.4-7.9,14.01s.33,13.93,7.9,13.93,7.9-4.4,7.9-13.93-.41-14.01-7.9-14.01Z" fill="#1d1d1b"></path><path d="M329.36,495.8c-18.41,0-20.69-9.86-20.69-22.4s2.28-22.48,20.69-22.48,20.69,9.86,20.69,22.48-2.36,22.4-20.69,22.4Zm0-36.41c-7.58,0-7.9,4.4-7.9,14.01s.33,13.93,7.9,13.93,7.9-4.4,7.9-13.93-.41-14.01-7.9-14.01Z" fill="#1d1d1b"></path><path d="M384.76,499.38c-2.2,7.58-5.13,12.46-15.8,12.46-5.62,0-7.17-.41-8.31-.57-.81-.16-1.22-.65-1.22-1.47v-.08l.08-5.05c.08-.81,.24-1.63,1.47-1.63h.08c1.3,0,3.01,.16,4.81,.16,4.24,0,6.19-1.3,7.09-4.72l1.06-3.75h-6.11c-.81,0-1.3-.57-1.47-1.3l-11.32-39.43c-.08-.24-.08-.41-.08-.57,0-.82,.57-1.47,1.47-1.47h9.45c1.06,0,1.63,.24,1.87,1.39l7.74,33.56h2.2l6.92-33.48c.24-1.14,.81-1.47,1.87-1.47h9.61c.9,0,1.55,.65,1.55,1.47,0,.16-.08,.33-.08,.57l-12.87,45.37Z" fill="#1d1d1b"></path></g></g></svg>
        </a>
        <a target="_blank" href="https://cordeel.eu/en">
            <img alt="cordeel-group logo" class="h-20 mx-auto py-4 px-4 rounded" src="@/assets/clients-logos/cordeel-group-logo.svg">
        </a>
    </div>
</div>
</template>
