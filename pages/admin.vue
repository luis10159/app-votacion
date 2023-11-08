<template>
    <div class="text-center  min-h-screen bg-sky-950 grid content-between fondo">
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
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Ver candidatos
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        Ver votantes
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        Ver conteo
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
        <!-- Contenido -->
        <div class="flex justify-center flex-wrap">
            <div class="w-80 m-10">
                <div class="alert shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <div>
                        <h3 class="font-bold">Registrar votante</h3>
                        <div class="text-xs">Registro de los votantes</div>
                    </div>
                    <button class="btn btn-sm" onclick="my_modal_1.showModal()">Crear</button>
                </div>

            </div>
            <div class="w-80 m-10">
                <div class="alert shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <div>
                        <h3 class="font-bold">Registrar candidatos</h3>
                        <div class="text-xs">Registro de los candidatos</div>
                    </div>
                    <button class="btn btn-sm" onclick="my_modal_2.showModal()">Crear</button>
                </div>
            </div>
            <div class="w-80 m-10">
                <div class="alert shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <h3 class="font-bold">Crear elección</h3>
                        <div class="text-xs">Crear elección</div>
                    </div>
                    <button class="btn btn-sm" onclick="my_modal_3.showModal()">Crear</button>
                </div>
            </div>
        </div>
        <FooterVotacion></FooterVotacion>

    </div>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box text-center">
            <h3 class="font-bold text-lg">Registrar votante</h3>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuál es el nombre?</span>
                </label>
                <input type="text" placeholder="Nombre" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuál es el DNI?</span>
                </label>
                <input type="text" placeholder="DNI" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Cuál es su facultad?</span>
                </label>
                <select class="select select-bordered">
                    <option disabled selected>Elige tu facultad</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                    <option>Opción 3</option>
                    <option>Opción 4</option>
                    <option>Opción 5</option>
                </select>

            </div>
            <button class="btn btn-primary mt-8">Crear</button>

        </div>
        <form method="dialog" class="modal-backdrop">
            <button>Cerrar</button>
        </form>
    </dialog>
    <dialog id="my_modal_2" class="modal">
        <div class="modal-box text-center">
            <h3 class="font-bold text-lg">Registrar candidato</h3>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuál es el nombre?</span>
                </label>
                <input type="text" placeholder="Nombre" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuál es el DNI?</span>
                </label>
                <input type="text" placeholder="DNI" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Cuál es el nombre del partido?</span>
                </label>
                <input type="text" placeholder="Partido" class="input input-bordered w-full" />
            </div>
            <button class="btn btn-primary mt-8">Crear</button>

        </div>
        <form method="dialog" class="modal-backdrop">
            <button>Cerrar</button>
        </form>
    </dialog>
    <dialog id="my_modal_3" class="modal">
        <div class="modal-box text-center">
            <h3 class="font-bold text-lg">Registrar elección</h3>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuál es el nombre?</span>
                </label>
                <input type="text" placeholder="Nombre" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuál es el año?</span>
                </label>
                <input type="text" placeholder="Año" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">¿Cuáles son los candidatos?</span>
                </label>
                <select class="select select-bordered">
                    <option disabled selected>Elige el candidato 1</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                    <option>Opción 3</option>
                    <option>Opción 4</option>
                    <option>Opción 5</option>
                </select>
                <select class="select select-bordered my-4">
                    <option disabled selected>Elige el candidato 1</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                    <option>Opción 3</option>
                    <option>Opción 4</option>
                    <option>Opción 5</option>
                </select>
                <select class="select select-bordered">
                    <option disabled selected>Elige el candidato 1</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                    <option>Opción 3</option>
                    <option>Opción 4</option>
                    <option>Opción 5</option>
                </select>
            </div>
            <button class="btn btn-primary mt-8">Crear</button>

        </div>
        <form method="dialog" class="modal-backdrop">
            <button>Cerrar</button>
        </form>
    </dialog>
</template>

<style>
/* * {
    border: 1px solid red;
} */
</style>