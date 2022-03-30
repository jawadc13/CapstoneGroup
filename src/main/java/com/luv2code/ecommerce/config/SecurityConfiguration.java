package com.luv2code.ecommerce.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.okta.spring.boot.oauth.Okta;



@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
    private MyBasicAuthenticationEntryPoint authenticationEntryPoint;

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
        
        http.exceptionHandling()
        .authenticationEntryPoint(authenticationEntryPoint);
        
     

        // force a non-empty response body for 401's to make the response more friendly
        Okta.configureResourceServer401ResponseBody(http);
        
     
     // disable CSRF since we are not using Cookies for session tracking
        http.csrf().disable();
    }
    

}
