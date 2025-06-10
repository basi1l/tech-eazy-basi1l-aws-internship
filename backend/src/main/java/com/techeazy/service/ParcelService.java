package com.techeazy.service;

import com.techeazy.entity.Parcel;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ParcelService {
    private final Map<String, Parcel> parcelMap = new HashMap<>();
    public List<Parcel> getAll() {
        return new ArrayList<>(parcelMap.values());
    }

    public Parcel get(String trackingNumber) {
        return parcelMap.get(trackingNumber);
    }

    public void create(Parcel parcel) {
        parcelMap.put(parcel.getTrackingNumber(), parcel);
    }

    public void update(String trackingNumber, Parcel parcel) {
        parcelMap.put(trackingNumber, parcel);
    }

    public void delete(String trackingNumber) {
        parcelMap.remove(trackingNumber);
    }
}
