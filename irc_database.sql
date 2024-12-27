-- Participants Table
CREATE TABLE `participants` (
  `participant_id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `organization` VARCHAR(150),
  `QR_code` VARCHAR(255) UNIQUE NOT NULL,
  `sessions_registered` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tracks Table
CREATE TABLE `tracks` (
  `track_id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(150) NOT NULL,
  `description` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sessions Table
CREATE TABLE `sessions` (
  `session_id` INT AUTO_INCREMENT PRIMARY KEY,
  `track_id` INT NOT NULL,
  `title` VARCHAR(150) NOT NULL,
  `speaker` VARCHAR(100) NOT NULL,
  `time` DATETIME NOT NULL,
  `venue` VARCHAR(150) NOT NULL,
  `capacity` INT NOT NULL,
  `registered_count` INT DEFAULT 0,
  FOREIGN KEY (`track_id`) REFERENCES `tracks`(`track_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Attendance Table
CREATE TABLE `attendance` (
  `attendance_id` INT AUTO_INCREMENT PRIMARY KEY,
  `participant_id` INT NOT NULL,
  `session_id` INT NOT NULL,
  `check_in_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`participant_id`) REFERENCES `participants`(`participant_id`) ON DELETE CASCADE,
  FOREIGN KEY (`session_id`) REFERENCES `sessions`(`session_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
