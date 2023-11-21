<template>
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
    <!-- Dialogs -->
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