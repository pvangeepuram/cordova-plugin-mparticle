package com.mparticle.example;

import android.app.Application;
import com.mparticle.MParticle;

public class ExampleApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        MParticle.start(this);
    }
}
