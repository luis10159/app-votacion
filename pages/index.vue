<template>
    <div class="min-h-screen fondo grid content-between">
        <div class="hero pt-8">
            <div class="hero-content grid grid-cols-24 gap-8">
                <div class="avatar flex justify-center">
                    <div class="w-40">
                        <img src="/unsm.763b782a.png" />
                    </div>

                </div>
                <div class="card shadow-2xl bg-slate-900">
                    <form class="card-body">
                        <h1 class="text-5xl font-bold mb-6">Iniciar sesión</h1>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Usuario</span>
                            </label>
                            <input type="email" placeholder="Usuario" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Contraseña</span>
                            </label>
                            <input type="password" placeholder="Contraseña" class="input input-bordered" required />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">¿Has olvidado tu contraseña?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <FooterVotacion />
    </div>
</template>
<style>
.fondo {
    background-image: linear-gradient(to right bottom, #230d60, #230d5a, #220c54, #210c4f, #200c49, #1e0e46, #1c0f44, #1a1041, #161240, #13143e, #10153d, #0e163b);
}
</style>