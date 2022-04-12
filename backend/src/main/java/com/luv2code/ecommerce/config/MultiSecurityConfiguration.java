package com.luv2code.ecommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.okta.spring.boot.oauth.Okta;

public class MultiSecurityConfiguration {

    @Configuration
    @Order(1)
    public static class mainConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {

            // protect endpoint /api/orders
            http.authorizeRequests()
                    .antMatchers("/api/orders/**")
                    .authenticated()
                    .and()
                    .oauth2ResourceServer()
                    .jwt();

            // add CORS filters
            http.cors();

            // force a non-empty response body for 401's to make the response more friendly
            Okta.configureResourceServer401ResponseBody(http);

            // disable CSRF since we are not using Cookies for session tracking
            http.csrf().disable();
        }
    }

    @Configuration
    public static class swaggerConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests()
                    .antMatchers("/swagger-ui.html", "/swagger-ui/index.html")
                    .hasRole("USER");
        }
    }

}
