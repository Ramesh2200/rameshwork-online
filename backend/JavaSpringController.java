package com.ramesh.portfolio.controller;

import com.ramesh.portfolio.model.Project;
import com.ramesh.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Java Spring Boot REST Controller
 * Connects React Frontend with MySQL Relational Database via Spring Data JPA.
 */
@RestController
@RequestMapping("/api/v1/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String tech) {
        List<Project> projects = projectService.fetchProjectsFromMySQL(category, tech);
        return ResponseEntity.ok(projects);
    }

    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        Project savedProject = projectService.saveProjectToMySQL(project);
        return ResponseEntity.status(201).body(savedProject);
    }
}
