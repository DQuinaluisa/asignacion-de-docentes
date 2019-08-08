exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('docente').del()
        .then(function() {
            // Inserts seed entries
            return knex('docente').insert([
                { cedula: '17505541149', apellido_paterno: 'Prieto', apellido_materno: 'Encalada', nombre1: 'Mauricio', nombre2: 'Jose', correo_insti: 'mje.prieto@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17549787454', apellido_paterno: 'Tamayo', apellido_materno: 'Tores', nombre1: 'Mauricio', nombre2: 'Juan', correo_insti: 'mjt.tamyo@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17005498494', apellido_paterno: 'Ruiz', apellido_materno: 'del Castillo', nombre1: 'Olivia', nombre2: 'Susana', correo_insti: 'osd.ruiz@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17873531357', apellido_paterno: 'Estrella', apellido_materno: 'Sotomayor', nombre1: 'Gorki', nombre2: 'Francisco', correo_insti: 'gfs.estrella@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17784510596', apellido_paterno: 'Pazmiño', apellido_materno: 'Salazar', nombre1: 'Geovanni', nombre2: 'Wladimir', correo_insti: 'gws.pazmiño@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },

            ]);
        });
};