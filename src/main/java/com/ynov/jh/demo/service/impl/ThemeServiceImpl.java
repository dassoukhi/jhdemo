package com.ynov.jh.demo.service.impl;

import com.ynov.jh.demo.service.ThemeService;
import com.ynov.jh.demo.domain.Livre;
import com.ynov.jh.demo.domain.Theme;
import com.ynov.jh.demo.repository.ThemeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Theme}.
 */
@Service
@Transactional
public class ThemeServiceImpl implements ThemeService {

    private final Logger log = LoggerFactory.getLogger(ThemeServiceImpl.class);

    private final ThemeRepository themeRepository;

    public ThemeServiceImpl(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    @Override
    public Theme save(Theme theme) {
        log.debug("Request to save Theme : {}", theme);
        return themeRepository.save(theme);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Theme> findAll() {
        log.debug("Request to get all Themes");
        return themeRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Theme> findOne(Long id) {
        log.debug("Request to get Theme : {}", id);
        return themeRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Theme : {}", id);
        themeRepository.deleteById(id);
    }

	@Override
	public List<Livre> findByTheme(String theme) {
		// TODO Auto-generated method stub
		return themeRepository.findLivresByTheme(theme);
	}
}
