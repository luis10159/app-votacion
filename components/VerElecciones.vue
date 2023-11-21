<template>
    
    <div class="overflow-x-auto m-12 color">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>

                    <th>Nombre</th>
                    <th>Año</th>
                    <th>Ganador</th>
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
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-ghost badge-sm">2021</span>
                    </td>
                    <td>Nombre Ganador</td>

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
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-ghost badge-sm">2022</span>
                    </td>
                    <td>Nombre Ganador</td>

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
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-ghost badge-sm">2023</span>
                    </td>
                    <td>Nombre Ganador</td>

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
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-ghost badge-sm">2024</span>
                    </td>
                    <td>Nombre Ganador</td>

                </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th>Nombre</th>
                    <th>Año</th>
                    <th>Ganador</th>
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