<template>
    
        <div class="overflow-x-auto m-12 color">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>

                        <th>Nombre</th>
                        <th>Partido</th>
                        <th>DNI</th>
                        <th>Cant. Votos</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/imagen1.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Nombre #1</div>
                                    <div class="text-sm opacity-50">Facultad #1</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-ghost badge-sm">Partido #1</span>
                        </td>
                        <td>7555555553</td>
                        <td>Sin votos</td>

                    </tr>
                    <!-- row 2 -->
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/imagen1.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Nombre #2</div>
                                    <div class="text-sm opacity-50">Facultad #2</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-ghost badge-sm">Partido #2</span>
                        </td>
                        <td>7555555553</td>
                        <td>123</td>

                    </tr>
                    <!-- row 3 -->
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/imagen1.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Nombre #3</div>
                                    <div class="text-sm opacity-50">Facultad #3</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-ghost badge-sm">Partido #3</span>
                        </td>
                        <td>7555555553</td>
                        <td>356</td>

                    </tr>
                    <!-- row 4 -->
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/imagen1.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Nombre #4</div>
                                    <div class="text-sm opacity-50">Facultad #4</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-ghost badge-sm">Partido #4</span>
                        </td>
                        <td>7555555553</td>
                        <td>Sin votos</td>

                    </tr>
                </tbody>
                <!-- foot -->
                <tfoot>
                    <tr>
                        <th>Nombre</th>
                        <th>Partido</th>
                        <th>DNI</th>
                        <th>Cant. Votos</th>
                    </tr>
                </tfoot>

            </table>
        </div>

</template>

<style scoped>
/* * {
    border: 1px solid red;
} */
.color {
    background-color: rgba(137, 43, 226, 0.049);
    border-radius: 15px;
}
</style>