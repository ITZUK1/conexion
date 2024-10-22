-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS colegio;

-- Usar la base de datos
USE colegio;

-- Tabla Estudiantes
CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    status INT DEFAULT 1 CHECK (status IN (1, 2)) -- 1: Activado, 2: Desactivado
);

-- Tabla Profesores
CREATE TABLE Profesores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    status INT DEFAULT 1 CHECK (status IN (1, 2)) -- 1: Activado, 2: Desactivado
);

-- Tabla Materias
CREATE TABLE Materias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    semestre INT,
    fecha_inicio DATE
);

-- Tabla Cursos (para relacionar profesores y materias)
CREATE TABLE Cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_materia INT NOT NULL,
    id_profesor INT NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (id_materia) REFERENCES Materias(id) ON DELETE CASCADE,
    FOREIGN KEY (id_profesor) REFERENCES Profesores(id) ON DELETE CASCADE
);


-- Tabla intermedia para la relación muchos-a-muchos entre Estudiantes y Cursos
CREATE TABLE Estudiantes_Cursos (
    id_estudiante INT NOT NULL,
    id_curso INT NOT NULL,
    PRIMARY KEY (id_estudiante, id_curso),
    FOREIGN KEY (id_estudiante) REFERENCES Estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Cursos(id) ON DELETE CASCADE
);


-- Ejemplo de inserción de datos (opcional)
INSERT INTO Estudiantes (nombre, fecha_nacimiento, telefono) VALUES
('Juan Pérez', '2005-03-15', '555-1234'),
('Maria Garcia', '2004-11-20', '555-5678');

INSERT INTO Profesores (nombre, fecha_nacimiento, telefono) VALUES
('Ana López', '1980-05-10', '555-9012');

INSERT INTO Materias (nombre, descripcion, semestre, fecha_inicio) VALUES
('Matemáticas', 'Cálculo diferencial e integral', 1, '2024-02-01');

INSERT INTO Cursos (id_materia, id_profesor, descripcion) VALUES
(1,1,'Curso de Matemáticas del semestre 1');


INSERT INTO Estudiantes_Cursos (id_estudiante, id_curso) VALUES
(1, 1); -- Juan Pérez está en el curso de matemáticas