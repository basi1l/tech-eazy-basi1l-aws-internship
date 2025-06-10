package com.techeazy.Repo;

import com.techeazy.entity.Parcel;
import java.util.*;

public class ParcelRepo {
    private final Map<String, Parcel> parcelStore = new HashMap<>();

    public List<Parcel> findAll() {
        return new ArrayList<>(parcelStore.values());
    }

    public Parcel findById(String id) {
        return parcelStore.get(id);
    }

    public void save(Parcel parcel) {
        parcelStore.put(parcel.getTrackingNumber(), parcel);
    }

    public void delete(String id) {
        parcelStore.remove(id);
    }

    public void update(String id, Parcel parcel) {
        parcelStore.put(id, parcel);
    }
}