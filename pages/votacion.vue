<template>
    <div class="text-center bg-sky-950 min-h-screen grid content-between fondo">
        <div class="drawer bg-sky-950">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <!-- Navbar -->
                <div class="navbar bg-base-300">
                    <div class="navbar-start">
                            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                            <div class="drawer-content">
                                <!-- Page content here -->
                                <label for="my-drawer" class="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </label>
                            </div>
                            <div class="drawer-side">
                                <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                                <ul class="menu menu-lg min-h-full bg-base-200 w-56 rounded-box">
                                    <li>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            Item 2
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Item 1
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                            Item 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div>

                    <div class="navbar-center">
                        <a class="btn btn-ghost normal-case text-xl">UNSM</a>
                    </div>
                    <div class="navbar-end">

                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="/imagen1.jpg" />
                                </div>
                            </label>
                            <ul tabindex="0"
                                class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Perfil
                                    </a>
                                </li>
                                <li><a>Ajustes</a></li>
                                <li><a>cerrar</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>

        </div>
        <div class="text-center py-10">
            <h1 class="text-4xl text-amber-400 font-bold">Elige</h1>
            <p class="text-5xl font-bold text-white">A uno de ellos.</p>
        </div>
        <div class="flex justify-center flex-wrap">
            <div class="card w-80 bg-slate-900 shadow-xl m-5">
                <figure class="px-5 pt-5">
                    <img src="/imagen1.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-white">Partido 1</h2>
                    <p class="text-amber-400">Héctor Luis</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Votar</button>
                    </div>
                </div>
            </div>

            <div class="card w-80 bg-slate-900 shadow-xl m-5">
                <figure class="px-5 pt-5">
                    <img src="/imagen1.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-white">Partido 2</h2>
                    <p class="text-amber-400">Patricio Gonza</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Votar</button>
                    </div>
                </div>
            </div>
            <div class="card w-80 bg-slate-900 shadow-xl m-5">
                <figure class="px-5 pt-5">
                    <img src="/imagen1.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-white">Partido 3</h2>
                    <p class="text-amber-400">Diego Alvarado</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Votar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-actions justify-center">
            <button class="btn btn-outline btn-primary">Conteo en tiempo real</button>
        </div>
        <FooterVotacion></FooterVotacion>

    </div>
</template>

<style>
/* * {
    border: 1px solid red;
} */
</style>